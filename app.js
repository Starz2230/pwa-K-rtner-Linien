document.addEventListener('DOMContentLoaded', () => {
  const screenLoading = document.getElementById('screen-loading');
  const screenHome = document.getElementById('screen-home');
  const screenTicket = document.getElementById('screen-ticket');

  const btnOpenTicket = document.getElementById('btn-open-ticket');

  // Nach 2 Sekunden: Lade-Screen ausblenden, Home-Screen einblenden
  setTimeout(() => {
    screenLoading.classList.add('hidden');
    screenHome.classList.remove('hidden');
  }, 2000);

  // Klick auf "Mein Ticket" => Ticket-Screen anzeigen
  btnOpenTicket.addEventListener('click', () => {
    screenHome.classList.add('hidden');
    screenTicket.classList.remove('hidden');
  });
});

// Service Worker Registrierung (für PWA)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Service Worker registriert'))
    .catch(err => console.error('Service Worker Fehler:', err));
}
