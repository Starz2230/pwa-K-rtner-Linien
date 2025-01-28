document.addEventListener('DOMContentLoaded', () => {
  const screenLoading = document.getElementById('screen-loading');
  const screenHome = document.getElementById('screen-home');
  const screenVideo = document.getElementById('screen-video');

  const btnOpenVideo = document.getElementById('btn-open-video');
  const btnBackHome = document.getElementById('btn-back-home');
  
  // Lade-Screen 2s anzeigen, dann Home-Screen
  setTimeout(() => {
    screenLoading.classList.add('hidden');
    screenHome.classList.remove('hidden');
  }, 2000);

  // Klick: Video-Screen zeigen, Home-Screen verstecken
  btnOpenVideo.addEventListener('click', () => {
    screenHome.classList.add('hidden');
    screenVideo.classList.remove('hidden');

    // (Optional) Video automatisch abspielen:
    const myVideo = document.getElementById('myVideo');
    myVideo.play().catch(e => {
      console.log("Autoplay blockiert oder Fehler:", e);
    });
  });

  // Klick: zurück zum Home-Screen
  btnBackHome.addEventListener('click', () => {
    screenVideo.classList.add('hidden');
    screenHome.classList.remove('hidden');

    // Video stoppen/pausieren
    const myVideo = document.getElementById('myVideo');
    myVideo.pause();
    myVideo.currentTime = 0;
  });
});

// Service Worker (PWA)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Service Worker registriert'))
    .catch(err => console.error('Service Worker Fehler:', err));
}
