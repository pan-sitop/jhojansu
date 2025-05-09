const quotes = [
  'JHOJANSU',
  'iiiii Loveee'
];
const container = document.getElementById('quotes-container');

function spawnQuote() {
  const text = quotes[Math.floor(Math.random() * quotes.length)];
  const el = document.createElement('div');
  el.className = 'quote';
  el.textContent = text;
  el.style.top  = Math.random() * 80 + '%';
  el.style.left = Math.random() * 80 + '%';
  container.appendChild(el);
  setTimeout(() => el.remove(), 8000);
}

setInterval(spawnQuote, 3000);
spawnQuote(); // la primera al cargar