const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

const totalTime = 14 * 24 * 60 * 60;

console.log(totalTime);
const remainingTime = function (time) {
  const seconds = time % 60;
  const minutes = Math.trunc((time / 60) % 60);
  const hours = Math.trunc((time / (60 * 60)) % 24);
  const days = Math.trunc(time / (24 * 60 * 60));

  console.log(days, hours, minutes, seconds);
  return { days, hours, minutes, seconds };
};

const renderTime = function (time) {
  daysEl.innerHTML = `${time.days}`;
  hoursEl.innerHTML = `${time.hours}`;
  minutesEl.innerHTML = `${time.minutes}`;
  secondsEl.innerHTML = `${time.seconds}`;
};
const timerDisplay = function (time) {
  setInterval(function () {
    time--;
    const remTime = remainingTime(time);
    renderTime(remTime);
  }, 1000);
};

timerDisplay(totalTime);
