const heroLayers = document.querySelectorAll('.hero-layer');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Only apply scroll to first viewport
  if (scrollY < 0.75*window.innerHeight) {
    heroLayers.forEach(layer => {
      const speed = parseFloat(layer.dataset.speed);
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }
});

const audio = document.getElementById('background-audio');
const btn = document.getElementById('play-pause-btn');
const icon = document.getElementById('play-pause-icon');
// Set initial icon state
icon.textContent = 'volume_off'; // Default to play icon

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    icon.textContent = 'pause';
  } else {
    audio.pause();
    icon.textContent = 'play_arrow';
  }
});
// Update icon based on audio state
audio.addEventListener('play', () => { icon.textContent = 'audiotrack'; });
audio.addEventListener('pause', () => { icon.textContent = 'volume_off'; });
