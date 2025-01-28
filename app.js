document.addEventListener('DOMContentLoaded', () => {
  const screenLoading = document.getElementById('screen-loading');
  const screenHome = document.getElementById('screen-home');
  const screenTicket = document.getElementById('screen-ticket');
  const btnOpenTicket = document.getElementById('btn-open-ticket');

  // Nach 2s wechselt der Lade-Screen zum Home-Screen
  setTimeout(() => {
    screenLoading.classList.add('hidden');
    screenHome.classList.remove('hidden');
  }, 2000);

  // Button "Mein Ticket" => Ticket-Screen
  btnOpenTicket.addEventListener('click', () => {
    screenHome.classList.add('hidden');
    screenTicket.classList.remove('hidden');
  });
});

// Service Worker (PWA)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Service Worker registriert.'))
    .catch(err => console.error('Service Worker Fehler:', err));
}
