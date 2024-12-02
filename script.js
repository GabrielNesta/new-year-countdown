const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

function getNewYearTime() {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  return new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();
}

let newYearTime = getNewYearTime();
updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  if (gap <= 0) {
    newYearTime = getNewYearTime();
  }
}
