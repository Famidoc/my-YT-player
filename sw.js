const CACHE_NAME = 'famidoc-player-v10';

// 安裝階段
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// 啟用階段
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// 攔截網路請求 (維持線上運作，因為 YouTube iframe 需要網路)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => {
    // 若網路斷線，可在此處理 (目前純依賴線上資源)
    return new Response('請確認您的網路連線以播放 YouTube 影片。');
  }));
});