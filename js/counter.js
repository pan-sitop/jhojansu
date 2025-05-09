const startDate = new Date('2025-02-14T00:00:00'); 
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;
  const secs = Math.floor(diff / 1000) % 60;
  const mins = Math.floor(diff / (1000*60)) % 60;
  const hrs  = Math.floor(diff / (1000*60*60)) % 24;
  const dys  = Math.floor(diff / (1000*60*60*24));
  daysEl.textContent = dys;
  hoursEl.textContent = hrs;
  minutesEl.textContent = mins;
  secondsEl.textContent = secs;
}
setInterval(updateCounter, 1000);
updateCounter();
