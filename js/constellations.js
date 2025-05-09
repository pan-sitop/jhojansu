// js/constellations.js

const canvas = document.getElementById('star-map');
const ctx    = canvas.getContext('2d');

// 1) Ajustar tamaño al de pantalla
canvas.width  = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// 2) Fondo de estrellas
const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.5
}));
function drawStars() {
  ctx.fillStyle = '#ffffff';
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

// 3) Corazón como constelación de puntos
const heartPts = [];
for (let i = 0; i < 200; i++) {
  const t = (i / 199) * 2 * Math.PI;
  const x = 16 * Math.sin(t) ** 3;
  const y =   13 * Math.cos(t)
            - 5  * Math.cos(2 * t)
            - 2  * Math.cos(3 * t)
            -    Math.cos(4 * t);
  heartPts.push({ x, y: -y });
}
const scale   = Math.min(canvas.width, canvas.height) / 40;
const cX      = canvas.width  / 2;
const cY      = canvas.height / 2 + 20;
const heart   = heartPts.map(p => ({
  x: cX + p.x * scale,
  y: cY + p.y * scale
}));

function drawHeart() {
  ctx.fillStyle   = '#ff497c';
  ctx.strokeStyle = '#ff497c';
  ctx.lineWidth   = 1;

  // Puntos
  heart.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
  });

  // Conectar
  ctx.beginPath();
  ctx.moveTo(heart[0].x, heart[0].y);
  heart.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.closePath();
  ctx.stroke();
}

// 4) Dibujar las letras J y S con texto
function drawLetters() {
  const letterColor = '#ff497c';
  ctx.fillStyle     = letterColor;
  ctx.font          = '80px Orbitron, sans-serif';
  ctx.textAlign     = 'center';
  ctx.textBaseline  = 'middle';

  // Ajusta estos offsets para colocarlas donde quieras dentro del corazón
  ctx.fillText('J', cX - 30, cY);
  ctx.fillText('S', cX + 30, cY);
}

// 5) Loop de renderizado
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();
  drawHeart();
  drawLetters();
  requestAnimationFrame(render);
}

render();