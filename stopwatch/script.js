const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hour = document.getElementById("hour");
const startBtn = document.getElementById("startBtn");
const btns = document.getElementById("btns");

let seconds = sec.innerHTML;
let minutes = min.innerHTML;
let hours = hour.innerHTML;

let timer;

function handleStart() {
  startBtn.style.display = "none";
  btns.style.display = "block";

  timer = setInterval(() => {
    seconds = Number(seconds);
    sec.innerHTML = ++seconds;

    if (seconds >= 59) {
      seconds = 0;
      minutes = Number(minutes);
      min.innerHTML = ++minutes;
    }

    if (minutes >= 59) {
      minutes = 0;
      hours = Number(hours);
      hour.innerHTML = ++hours;
    }
  }, 1000);
}

function handleReset() {
  hour.innerHTML = "00";
  sec.innerHTML = "00";
  min.innerHTML = "00";
  clearInterval(timer);
  startBtn.style.display = "inline";
  btns.style.display = "none";

  lapList.innerHTML = "";
}

function handlePause() {
  clearInterval(timer);
}

const lapList = document.getElementById("lapList");
const lapBtn = document.getElementById("lapBtn");

lapBtn.addEventListener("click", handleLap);

function handleLap() {
  const lapTime = `${hour.innerHTML}:${min.innerHTML}:${sec.innerHTML}`;
  const lapItem = document.createElement("li");
  lapItem.innerHTML = lapTime;
  lapList.appendChild(lapItem);
}
