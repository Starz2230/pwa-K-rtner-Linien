// Warten bis DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    const screenLoading = document.getElementById('screen-loading');
    const screenHome = document.getElementById('screen-home');
    const screenTicket = document.getElementById('screen-ticket');
  
    const btnOpenTicket = document.getElementById('btn-open-ticket');
  
    // 1) Lade-Screen (Bild 3) kurz anzeigen, dann zu Home (Bild 2) wechseln
    setTimeout(() => {
      screenLoading.classList.add('hidden'); // verstecken
      screenHome.classList.remove('hidden'); // zeigen
    }, 2000); // 2 Sekunden Loading, anpassbar
  
    // 2) Klick auf "Mein Ticket" -> Ticket-Screen (Bild 1)
    btnOpenTicket.addEventListener('click', () => {
      screenHome.classList.add('hidden');
      screenTicket.classList.remove('hidden');
    });
  });
  
  // PWA: Service Worker Registrierung
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => console.log('Service Worker registriert'))
      .catch(err => console.error('Service Worker Fehler:', err));
  }
  