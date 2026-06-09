// ===================================================
// 【XCITY 跑馬燈內容編輯區】
// 您可以直接在這裡自由修改文字、更換圖片路徑、或更改點擊網址。
// 想增加圖塊就直接複製一整組 { ... }，想減少就刪除。
// ===================================================
const marqueeData = [
    {
        title: "最新精選專題",                 // 圖塊下方顯示的標題
        imageUrl: "images/pic1.jpg",         // 跑馬燈圖塊的圖片路徑
        linkUrl: "https://example.com/page1" // 點擊圖塊後跳轉的網址
    },
    {
        title: "熱門創作者企劃",
        imageUrl: "images/pic2.jpg",
        linkUrl: "https://example.com/page2"
    },
    {
        title: "限時動態展演",
        imageUrl: "images/pic3.jpg",
        linkUrl: "https://example.com/page3"
    },
    {
        title: "XCITY 新星招募",
        imageUrl: "images/pic4.jpg",
        linkUrl: "https://example.com/page4"
    },
    {
        title: "獨家限定影音",
        imageUrl: "images/pic5.jpg",
        linkUrl: "https://example.com/page5"
    }
];

// ===================================================
// 核心跑馬燈無縫渲染邏輯（請勿隨意更動）
// ===================================================
function initMarquee() {
    const track = document.getElementById('marqueeTrack');
    if (!track) return;

    // 建立單個卡片的 HTML 範本
    function createItemHtml(item) {
        return `
            <a href="${item.linkUrl}" class="marquee-item" target="_blank">
                <div class="item-image-box">
                    <img src="${item.imageUrl}" alt="${item.title}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\' viewBox=\'0 0 100 100\'><rect width=\'100\' height=\'100\' fill=\'%23f3f3f3\'/><text x=\'50%\' y=\'55%\' font-size=\'10\' text-anchor=\'middle\' fill=\'%23aaa\'>XCITY 圖片預覽</text></svg>';">
                </div>
                <div class="item-info">
                    <div class="item-title">${item.title}</div>
                </div>
            </a>
        `;
    }

    // 將您設定的陣列資料自動複製生成兩組相同的內容，以達成物理上的完美無縫循環滾動
    const originalHtml = marqueeData.map(item => createItemHtml(item)).join('');
    track.innerHTML = originalHtml + originalHtml;
}

// 確保網頁 DOM 元素載入完成後啟動跑馬燈
document.addEventListener('DOMContentLoaded', initMarquee);
