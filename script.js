// --- Translation System ---
const translations = {
    ko: {
        // camera.html
        'camera-title': '어종확인 - 사진촬영',
        'fish-info-title': '어종 정보',
        'analyzing': '분석 중...',
        'fish-name': '어종',
        'fish-weight': '무게',
        'fish-price': '적정가',
        'size': '크기',
        'size-large': '상',
        'size-medium': '중',
        'size-small': '하',
        'weight-range': '무게 범위',
        'price-per-100g': '100g당 가격',
        // index.html
        'location': '부산 · 자갈치시장',
        'main-description': 'AI로 어종·무게 인식 및 오늘의 적정가 확인',
        'seasonal-title': '오늘의 제철 추천어종',
        'warm-sea': '수온바다',
        'warm-sea-desc': '수온 데이터로 내일 수영할 바다 찾기',
        'warning': '주의점',
        'warning-desc': '사기 유형 · 숨은 비용 계산',
        'market-guide': '시장 설명서',
        'market-guide-desc': '구조·상차림비·결제·영업시간 안내',
        'price-check': '오늘의 적정가 빠르게 확인하기',
        'fish-is': '입니다',
        // warm sea.html
        'warm-sea-title': '수온바다',
        'marker-list': '마커 목록',
        'sort-by-distance': '내 위치 기준 정렬',
        'name': '이름',
        'temperature': '수온',
        'distance': '거리',
        'my-location': '내 위치',
        'camera-error': '카메라에 접근할 수 없습니다. 권한을 확인해주세요.',
        'camera-not-supported': '현재 브라우저에서는 카메라 기능을 지원하지 않습니다.',
        // warning.html
        'warning-title': '주의점',
        'scale-zero-check-1': '바구니가 올라간 저울이 영점이 맞춰져있는지 확인하세요. (1)',
        'scale-zero-check-2': '바구니가 올라간 저울이 영점이 맞춰져있는지 확인하세요. (2)',
        'basket-drain-check': '바구니에 물이 잘 빠지는지 확인하세요.',
        'cable-tie-check': '저울 기둥에 케이블 타이가 묶여 있는 경우, 무게를 잴 때 바구니가 케이블 타이와 떨어져 있는지 확인하세요.',
        'drain-again-check': '최종 가격 확정 전에, 물을 한 번 더 빼주세요.',
        'table-setting-fee-check': '인당 상차림비를 확인하세요.',
        // market_guide.html
        'market-guide-title': '시장 설명서',
        'busan-market': '부산 · 자갈치시장',
        'seoul-market': '서울 · 노량진수산시장',
        'structure': '구조',
        'payment': '결제',
        'structure-busan': '1층 수산 판매 / 2층 식당',
        'payment-busan': '카드/현금',
        'structure-seoul': '판매동/식당동 분리',
        'payment-seoul': '카드/현금/간편결제',
        // fish names
        'flounder': '광어',
        'hairtail': '전어',
        'cuttlefish': '갑오징어'
    },
    en: {
        // camera.html
        'camera-title': 'Species Identification - Photo',
        'fish-info-title': 'Fish Info',
        'analyzing': 'Analyzing...', 
        'fish-name': 'Species',
        'fish-weight': 'Weight',
        'fish-price': 'Fair Price',
        'size': 'Size',
        'size-large': 'Large',
        'size-medium': 'Medium',
        'size-small': 'Small',
        'weight-range': 'Weight Range',
        'price-per-100g': 'Price/100g',
        // index.html
        'location': 'Busan · Jagalchi Market',
        'main-description': 'AI-powered species and weight recognition, check today\'s fair price',
        'seasonal-title': 'Today\'s Recommended Seasonal Fish',
        'warm-sea': 'Warm Sea',
        'warm-sea-desc': 'Find tomorrow\'s swimming spot with water temperature data',
        'warning': 'Warnings',
        'warning-desc': 'Scam types · Hidden cost calculation',
        'market-guide': 'Market Guide',
        'market-guide-desc': 'Structure · Handling fee · Payment · Business hours',
        'price-check': 'Quickly check today\'s fair price',
        'fish-is': ' is',
        // warm sea.html
        'warm-sea-title': 'Warm Sea',
        'marker-list': 'Marker List',
        'sort-by-distance': 'Sort by Distance',
        'name': 'Name',
        'temperature': 'Temp',
        'distance': 'Distance',
        'my-location': 'My Location',
        'camera-error': 'Cannot access camera. Please check permissions.',
        'camera-not-supported': 'Camera feature is not supported in your browser.',
        // warning.html
        'warning-title': 'Warnings',
        'scale-zero-check-1': 'Check if the scale with the basket on it is zeroed. (1)',
        'scale-zero-check-2': 'Check if the scale with the basket on it is zeroed. (2)',
        'basket-drain-check': 'Check if water drains well from the basket.',
        'cable-tie-check': 'If a cable tie is tied to the scale column, make sure the basket is clear of the cable tie when weighing.',
        'drain-again-check': 'Please drain the water one more time before final price confirmation.',
        'table-setting-fee-check': 'Check the table setting fee per person.',
        // market_guide.html
        'market-guide-title': 'Market Guide',
        'busan-market': 'Busan · Jagalchi Market',
        'seoul-market': 'Seoul · Noryangjin Fish Market',
        'structure': 'Structure',
        'payment': 'Payment',
        'structure-busan': '1F: Seafood sales / 2F: Restaurants',
        'payment-busan': 'Card/Cash',
        'structure-seoul': 'Sales building / Restaurant building separated',
        'payment-seoul': 'Card/Cash/Mobile payment',
        // fish names
        'flounder': 'Flounder',
        'hairtail': 'Hairtail',
        'cuttlefish': 'Cuttlefish'
    },
    zh: {
        // camera.html
        'camera-title': '鱼种识别 - 拍照',
        'fish-info-title': '鱼种信息',
        'analyzing': '分析中...',
        'fish-name': '鱼种',
        'fish-weight': '重量',
        'fish-price': '合理价格',
        'size': '尺寸',
        'size-large': '大',
        'size-medium': '中',
        'size-small': '小',
        'weight-range': '重量范围',
        'price-per-100g': '每100克价格',
        // index.html
        'location': '釜山 · 札嘎其市场',
        'main-description': 'AI识别鱼种·重量及查看今日合理价格',
        'seasonal-title': '今日推荐时令鱼种',
        'warm-sea': '温暖海域',
        'warm-sea-desc': '用水温数据找到明天可以游泳的海域',
        'warning': '注意事项',
        'warning-desc': '诈骗类型 · 隐藏费用计算',
        'market-guide': '市场指南',
        'market-guide-desc': '结构·装卸费·支付·营业时间',
        'price-check': '快速查看今日合理价格',
        'fish-is': '是',
        // warm sea.html
        'warm-sea-title': '温暖海域',
        'marker-list': '标记列表',
        'sort-by-distance': '按距离排序',
        'name': '名称',
        'temperature': '수온',
        'distance': '距离',
        'my-location': '我的位置',
        'camera-error': '无法访问相机。请检查权限。',
        'camera-not-supported': '您的浏览器不支持相机功能。',
        // warning.html
        'warning-title': '注意事项',
        'scale-zero-check-1': '请检查秤上放有篮子时是否已归零。(1)',
        'scale-zero-check-2': '请检查秤上放有篮子时是否已归零。(2)',
        'basket-drain-check': '请检查篮子里的水是否排干。',
        'cable-tie-check': '如果秤柱上绑有扎带，称重时请确保篮子与扎带分离。',
        'drain-again-check': '最终价格确定前，请再沥一次水。',
        'table-setting-fee-check': '请确认每人餐桌费。',
        'scale-zero-check-6': '请检查秤上放有篮子时是否已归零。(6)',
        // market_guide.html
        'market-guide-title': '市场指南',
        'busan-market': '釜山 · 札嘎其市场',
        'seoul-market': '首尔 · 鹭梁津水产市场',
        'structure': '结构',
        'payment': '支付',
        'structure-busan': '1层：海鲜销售 / 2层：餐厅',
        'payment-busan': '卡/现金',
        'structure-seoul': '销售楼/餐厅楼分离',
        'payment-seoul': '卡/现金/移动支付',
        // fish names
        'flounder': '比目鱼',
        'hairtail': '带鱼',
        'cuttlefish': '墨鱼'
    }
};

// Get current language from localStorage or default to 'ko'
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'ko';
}

// Set current language
function setCurrentLanguage(lang) {
    localStorage.setItem('language', lang);
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update page title if it has data-i18n-title
    const titleElement = document.querySelector('[data-i18n-title]');
    if (titleElement) {
        const titleKey = titleElement.getAttribute('data-i18n-title');
        if (translations[lang] && translations[lang][titleKey]) {
            document.title = translations[lang][titleKey];
        }
    }
}

// Change language and apply translations
function changeLanguage(lang) {
    setCurrentLanguage(lang);
    applyTranslations(lang);
    
    // Update language button display
    const currentLanguageSpan = document.getElementById('current-language');
    if (currentLanguageSpan) {
        currentLanguageSpan.textContent = lang.toUpperCase();
    }
    
    // Dispatch event for other scripts to listen to
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved language on page load
    const currentLang = getCurrentLanguage();
    applyTranslations(currentLang);
    
    const cameraFeed = document.getElementById('camera-feed');
    const shutterButton = document.querySelector('.shutter-button-container');
    const canvas = document.createElement('canvas'); // Create a canvas element
    const currentLanguageSpan = document.getElementById('current-language');
    
    // Update language button display
    if (currentLanguageSpan) {
        currentLanguageSpan.textContent = currentLang.toUpperCase();
    }

    // --- Navigation Logic ---
    const fishCheckBox = document.getElementById('fish-check-box');
    const coloredBox = document.querySelector('.colored-box');
    const warningBox = document.getElementById('warning-box');
    const marketGuideBox = document.getElementById('market-guide-box');

    if (fishCheckBox) {
        fishCheckBox.addEventListener('click', () => {
            window.location.href = 'warm sea.html';
        });
    }

    if (coloredBox) {
        coloredBox.addEventListener('click', () => {
            window.location.href = 'camera.html';
        });
    }

    if (warningBox) {
        warningBox.addEventListener('click', () => {
            window.location.href = 'warning.html';
        });
    }

    if (marketGuideBox) {
        marketGuideBox.addEventListener('click', () => {
            window.location.href = 'market_guide.html';
        });
    }

    // --- Camera View Logic ---
    if (cameraFeed) {
        // Access the camera
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    cameraFeed.srcObject = stream;
                    cameraFeed.play();
                })
                .catch(err => {
                    console.error("Error accessing the camera: ", err);
                    const lang = getCurrentLanguage();
                    alert(translations[lang]['camera-error'] || translations['ko']['camera-error']);
                });
        } else {
            console.error("getUserMedia not supported on your browser!");
            const lang = getCurrentLanguage();
            alert(translations[lang]['camera-not-supported'] || translations['ko']['camera-not-supported']);
        }
    }

    const popupOverlay = document.getElementById('popup-overlay');
    const closeButton = document.querySelector('.close-button');
    const capturedImage = document.getElementById('captured-image');
    const fishInfoContainer = document.getElementById('fish-info-container');

    if (closeButton && popupOverlay) {
        closeButton.addEventListener('click', () => {
            popupOverlay.style.display = 'none';
        });
    }

    if (popupOverlay) {
        popupOverlay.addEventListener('click', (event) => {
            // Close popup if clicked outside of the content
            if (event.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    }

    // --- Shutter Button Logic ---
    if (shutterButton && cameraFeed) {
        shutterButton.addEventListener('click', () => {
            // Set canvas dimensions to match the video feed
            canvas.width = cameraFeed.videoWidth;
            canvas.height = cameraFeed.videoHeight;

            // Draw the current video frame onto the canvas
            const context = canvas.getContext('2d');
            context.drawImage(cameraFeed, 0, 0, canvas.width, canvas.height);

            // Create a data URL from the canvas
            const dataUrl = canvas.toDataURL('image/png');

            if (popupOverlay && capturedImage && fishInfoContainer) {
                capturedImage.src = dataUrl;

                const lang = getCurrentLanguage();
                const analyzingText = translations[lang]['analyzing'] || translations['ko']['analyzing'];
                fishInfoContainer.innerHTML = `<p data-i18n="analyzing">${analyzingText}</p>`;

                popupOverlay.style.display = 'flex';

                // Simulate backend call and display dummy data
                setTimeout(() => {
                    const lang = getCurrentLanguage();
                    const fishData = {
                        ko: {
                            name: "참돔",
                            sizes: {
                                large: { range: "1kg 이상", price: "3,500원" },
                                medium: { range: "500g - 1kg", price: "3,000원" },
                                small: { range: "500g 미만", price: "2,500원" }
                            }
                        },
                        en: {
                            name: "Red seabream",
                            sizes: {
                                large: { range: "> 1kg", price: "3,500원" },
                                medium: { range: "500g - 1kg", price: "3,000원" },
                                small: { range: "< 500g", price: "2,500원" }
                            }
                        },
                        zh: {
                            name: "真鯛",
                            sizes: {
                                large: { range: "超过1公斤", price: "3,500원" },
                                medium: { range: "500克 - 1公斤", price: "3,000원" },
                                small: { range: "低于500克", price: "2,500원" }
                            }
                        }
                    };

                    const currentLangData = fishData[lang] || fishData['ko'];
                    const sizeLabel = translations[lang]['size'] || translations['ko']['size'];
                    const largeLabel = translations[lang]['size-large'] || translations['ko']['size-large'];
                    const mediumLabel = translations[lang]['size-medium'] || translations[lang]['size-medium'];
                    const smallLabel = translations[lang]['size-small'] || translations['ko']['size-small'];
                    const pricePer100gLabel = translations[lang]['price-per-100g'] || translations['ko']['price-per-100g'];

                    fishInfoContainer.innerHTML = `
                        <p style="text-align: center; font-size: 18px; margin-bottom: 15px;"><strong>${currentLangData.name}</strong></p>
                        <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 14px;">
                            <thead>
                                <tr>
                                    <th style="padding: 8px; border-bottom: 1px solid #ddd; background-color: #f9f9f9;">${sizeLabel}</th>
                                    <th style="padding: 8px; border-bottom: 1px solid #ddd; background-color: #f9f9f9;">${pricePer100gLabel}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 8px; border-bottom: 1px solid #eee;">${largeLabel} (${currentLangData.sizes.large.range})</td>
                                    <td style="padding: 8px; border-bottom: 1px solid #eee;">${currentLangData.sizes.large.price}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border-bottom: 1px solid #eee;">${mediumLabel} (${currentLangData.sizes.medium.range})</td>
                                    <td style="padding: 8px; border-bottom: 1px solid #eee;">${currentLangData.sizes.medium.price}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px;">${smallLabel} (${currentLangData.sizes.small.range})</td>
                                    <td style="padding: 8px;">${currentLangData.sizes.small.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    `;
                }, 2000);
            }
        });
    }

    // --- Language Selection Logic ---
    // Simple and robust language selector
    function setupLanguageSelector() {
        // Find all language buttons on the page
        const languageButtons = document.querySelectorAll('.language-button');
        
        if (languageButtons.length === 0) {
            return; // No language buttons found
        }

        languageButtons.forEach(function(button) {
            // Find dropdown within this button
            const dropdown = button.querySelector('.language-dropdown');
            if (!dropdown) {
                return; // No dropdown found
            }

            // Ensure dropdown starts hidden
            dropdown.style.display = 'none';

            // Toggle function
            function showDropdown() {
                // Hide all other dropdowns
                document.querySelectorAll('.language-dropdown').forEach(function(d) {
                    d.style.display = 'none';
                    d.classList.remove('show');
                });
                // Show this one
                dropdown.style.display = 'block';
                dropdown.classList.add('show');
            }

            function hideDropdown() {
                dropdown.style.display = 'none';
                dropdown.classList.remove('show');
            }

            // Button click - toggle dropdown
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (dropdown.style.display === 'block') {
                    hideDropdown();
                } else {
                    showDropdown();
                }
            });

            // Language option clicks
            const options = dropdown.querySelectorAll('[data-lang]');
            options.forEach(function(option) {
                option.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const lang = this.getAttribute('data-lang');
                    if (lang === 'ko' || lang === 'en' || lang === 'zh') {
                        hideDropdown();
                        changeLanguage(lang);
                    }
                });
            });
        });

        // Close dropdowns when clicking outside
        // Use a single handler for all clicks
        if (!window._languageClickHandler) {
            window._languageClickHandler = function(e) {
                const allButtons = document.querySelectorAll('.language-button');
                let clickedInside = false;
                
                allButtons.forEach(function(button) {
                    if (button.contains(e.target)) {
                        clickedInside = true;
                        return;
                    }
                    const dropdown = button.querySelector('.language-dropdown');
                    if (dropdown && dropdown.contains(e.target)) {
                        clickedInside = true;
                        return;
                    }
                });
                
                if (!clickedInside) {
                    document.querySelectorAll('.language-dropdown').forEach(function(d) {
                        d.style.display = 'none';
                        d.classList.remove('show');
                    });
                }
            };
            
            // Add event listener with capture phase
            document.addEventListener('click', window._languageClickHandler, true);
            document.addEventListener('touchend', window._languageClickHandler, true);
        }
    }

    // Initialize language selector
    setupLanguageSelector();

    // --- Fish Tag Click Logic ---
    const fishTags = document.querySelectorAll('.fish-tag');
    if (fishTags.length > 0) {
        fishTags.forEach(tag => {
            tag.addEventListener('click', () => {
                const fishName = tag.textContent.trim();
                const lang = getCurrentLanguage();
                const fishIsText = translations[lang]['fish-is'] || translations['ko']['fish-is'];
                console.log(`${fishName}${fishIsText}`); // Log to console instead of updating fishDisplayText
            });
        });
    }
});