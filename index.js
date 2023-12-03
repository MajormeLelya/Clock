const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const clock = document.getElementById("clock");

let timerId;

startButton.addEventListener("click", function () {
  timerId = 0;
  if (!timerId) {
    timerId = setInterval(() => updateClock(), 1000);
  }
});

stopButton.addEventListener("click", function () {
  clearInterval(timerId);
});

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  clock.textContent = hours + ":" + minutes + ":" + seconds;
}
