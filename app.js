document.addEventListener('DOMContentLoaded', () => {
  // Bildschirme referenzieren
  const screenLoading = document.getElementById('screen-loading');
  const screenHome = document.getElementById('screen-home');
  const screenVideo = document.getElementById('screen-video');

  // Button im Home-Screen
  const btnOpenTicket = document.getElementById('btn-open-ticket');

  // Button im Video-Screen (falls du zurück willst)
  const btnBackHome = document.getElementById('btn-back-home');

  // 1) Loading nach 2s ausblenden, Home einblenden
  setTimeout(() => {
    screenLoading.classList.add('hidden');
    screenHome.classList.remove('hidden');
  }, 2000);

  // 2) Klick auf "Mein Ticket" => Video-Screen
  btnOpenTicket.addEventListener('click', () => {
    screenHome.classList.add('hidden');
    screenVideo.classList.remove('hidden');
    // Falls du willst, kannst du das Video neu starten:
    const vid = document.getElementById('myVideo');
    vid.currentTime = 0; 
    vid.play().catch(err => console.log('Autoplay blockiert oder Fehler:', err));
  });

  // 3) Zurück-Button im Video-Screen => zurück zum Home
  btnBackHome.addEventListener('click', () => {
    screenVideo.classList.add('hidden');
    screenHome.classList.remove('hidden');
    // Video stoppen
    const vid = document.getElementById('myVideo');
    vid.pause();
    vid.currentTime = 0;
  });
});

// Service Worker Registrierung
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Service Worker registriert'))
    .catch(err => console.error('Service Worker Fehler:', err));
}
