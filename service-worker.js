self.addEventListener('install', event => {
  console.log('[Service Worker] Installiert');
  // Optional: Dateien cachen.
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Aktiviert');
});

self.addEventListener('fetch', event => {
  // Optional: Caching-Strategien für Offline.
});
