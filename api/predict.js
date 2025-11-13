// node-fetch를 CommonJS dynamic import로 사용
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = async function handler(req, res) {
  // POST 요청만 허용
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 환경 변수 확인
    const predictionKey = process.env.AZURE_PREDICTION_KEY;
    const endpoint = process.env.AZURE_ENDPOINT;
    const projectId = process.env.AZURE_PROJECT_ID;
    const iterationName = process.env.AZURE_ITERATION_NAME;

    if (!predictionKey || !endpoint || !projectId || !iterationName) {
      console.error('Missing environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error',
        message: 'Azure configuration is missing' 
      });
    }

    // Azure Custom Vision Prediction API URL 구성
    const predictionUrl = `${endpoint}/customvision/v3.0/Prediction/${projectId}/classify/iterations/${iterationName}/image`;

    // 이미지 바이너리 수신 (스트림 → Buffer)
    // bodyParser가 비활성화되어 있으므로 req를 스트림으로 직접 읽기
    const chunks = [];
    
    await new Promise((resolve, reject) => {
      req.on('data', (chunk) => {
        chunks.push(chunk);
      });
      
      req.on('end', () => {
        resolve();
      });
      
      req.on('error', (err) => {
        reject(err);
      });
    });
    
    const imageBuffer = Buffer.concat(chunks);

    if (!imageBuffer || imageBuffer.length === 0) {
      return res.status(400).json({ error: 'No image data provided' });
    }

    // Azure API로 요청 전송
    const azureResponse = await fetch(predictionUrl, {
      method: 'POST',
      headers: {
        'Prediction-Key': predictionKey,
        'Content-Type': 'application/octet-stream',
      },
      body: imageBuffer,
    });

    if (!azureResponse.ok) {
      const errorText = await azureResponse.text();
      console.error('Azure API error:', azureResponse.status, errorText);
      return res.status(azureResponse.status).json({ 
        error: 'Azure API request failed',
        message: errorText 
      });
    }

    // Azure 응답을 그대로 반환
    const result = await azureResponse.json();
    return res.status(200).json(result);

  } catch (error) {
    console.error('Prediction error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};

