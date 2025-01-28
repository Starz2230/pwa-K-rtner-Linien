self.addEventListener('install', event => {
    console.log('[Service Worker] Installiert');
    // Du könntest hier Dateien cachen, wenn du Offline-Funktion möchtest.
  });
  
  self.addEventListener('activate', event => {
    console.log('[Service Worker] Aktiviert');
  });
  
  self.addEventListener('fetch', event => {
    // Optional: Caching-Strategien
  });
  