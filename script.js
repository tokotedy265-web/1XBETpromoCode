// Particles gentle shimmer
(function () {
  const el = document.getElementById('particles');
  let t = 0;
  function tick() {
    t += 0.008;
    el.style.opacity = 0.5 + Math.sin(t) * 0.1;
    requestAnimationFrame(tick);
  }
  tick();
})();

// Button click feedback
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.98)');
  btn.addEventListener('mouseup', () => btn.style.transform = '');
  btn.addEventListener('mouseleave', () => btn.style.transform = '');
});

// Set your download link here (official 1xBet link or landing)
const downloadBtn = document.getElementById('download');
downloadBtn.href = 'https://1xbet.com'; // Remplacez par votre lien d’affiliation officiel