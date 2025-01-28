self.addEventListener('install', event => {
  console.log('[Service Worker] Installiert');
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Aktiviert');
});

self.addEventListener('fetch', event => {
  // Optional: Caching-Strategien einbauen
});
