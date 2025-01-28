// Nach 2s Lade-Screen weg, Home anzeigen
setTimeout(() => {
  document.getElementById('screen-loading').classList.add('hidden');
  document.getElementById('screen-home').classList.remove('hidden');
}, 2000);

// Klick auf Button => Video-Screen
document.getElementById('btn-open-video').addEventListener('click', () => {
  document.getElementById('screen-home').classList.add('hidden');
  document.getElementById('screen-video').classList.remove('hidden');
});

// Klick auf "Zurück"-Button => zurück zum Home
document.getElementById('btn-back-home').addEventListener('click', () => {
  document.getElementById('screen-video').classList.add('hidden');
  document.getElementById('screen-home').classList.remove('hidden');
  // Optional: Video zurücksetzen
  const vid = document.getElementById('myVideo');
  vid.pause();
  vid.currentTime = 0;
});
