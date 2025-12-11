// Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // 基本的に何もしない（ネットワーク通信をそのまま通す）
});