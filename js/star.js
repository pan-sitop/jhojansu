// js/star.js
function spawnStar() {
  const star = document.createElement('div');
  star.className = 'shooting-star';

  // Posición inicial aleatoria en la franja superior
  star.style.top  = Math.random() * 50 + 'vh';   // entre 0 y x% de altura
  star.style.left = Math.random() * 100 + 'vw';  

  document.body.appendChild(star);

  // Al terminar la animación, lo quitamos
  star.addEventListener('animationend', () => star.remove());
}

// Cada 1.5 s nace una nueva estrella fugaz
setInterval(spawnStar, 70);
spawnStar();