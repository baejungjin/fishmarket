export const config = {
  api: {
    bodyParser: false,
  },
};

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Collect binary data
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const predictionKey = process.env.AZURE_PREDICTION_KEY;
    const endpoint = process.env.AZURE_ENDPOINT;
    const projectId = process.env.AZURE_PROJECT_ID;
    const iterationName = process.env.AZURE_ITERATION_NAME;

    const predictionUrl = `${endpoint}/customvision/v3.0/Prediction/${projectId}/classify/iterations/${iterationName}/image`;

    // Use global fetch (Node 18+)
    const azureResponse = await fetch(predictionUrl, {
      method: "POST",
      headers: {
        "Prediction-Key": predictionKey,
        "Content-Type": "application/octet-stream",
      },
      body: buffer,
    });

    const result = await azureResponse.json();

    return res.status(200).json(result);

  } catch (err) {
    console.error("Prediction error:", err);
    return res.status(500).json({ error: "Prediction failed", details: err.message });
  }
};
