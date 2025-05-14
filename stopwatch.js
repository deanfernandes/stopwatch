let time = 0;
let isPlaying = false;
const timeElement = document.querySelector(".time");
const buttonTogglePlayElement = document.querySelector(".button-toggleplay");
const buttonResetELement = document.querySelector(".button-reset");
const circlesSmallElement = document.querySelector(".circles-small");
const circlesBigElement = document.querySelector(".circles-big");
const containerElement = document.querySelector(".container");
let intervalId;

function onTogglePlay() {
  if (isPlaying) {
    window.clearInterval(intervalId);
    buttonTogglePlayElement.innerText = "Play";
    circlesSmallElement.style.animationPlayState = "paused";

    circlesBigElement.classList.add("paused");
    circlesSmallElement.classList.add("paused");
    buttonTogglePlayElement.classList.add("paused");
    buttonResetELement.classList.add("paused");
    containerElement.classList.add("paused");
  } else {
    intervalId = window.setInterval(() => {
      time += 0.1;
      timeElement.innerText = time.toFixed(2);
    }, 100);
    buttonTogglePlayElement.innerText = "Pause";
    circlesSmallElement.style.animationPlayState = "running";

    circlesBigElement.classList.remove("paused");
    circlesSmallElement.classList.remove("paused");
    buttonTogglePlayElement.classList.remove("paused");
    buttonResetELement.classList.remove("paused");
    containerElement.classList.remove("paused");
  }

  isPlaying = !isPlaying;
}

function onReset() {
  time = 0;
  timeElement.innerText = time.toFixed(2);
  window.clearInterval(intervalId);
  buttonTogglePlayElement.innerText = "Play";
  isPlaying = false;

  document.querySelector(".button-play").style.display = "block";
  document.querySelector(".button-toggleplay").style.display = "none";
  document.querySelector(".button-reset").style.display = "none";
  document.querySelector(".circles").style.display = "none";

  circlesBigElement.classList.remove("paused");
  circlesSmallElement.classList.remove("paused");
  buttonTogglePlayElement.classList.remove("paused");
  buttonResetELement.classList.remove("paused");
  containerElement.classList.remove("paused");
}

function onPlay() {
  document.querySelector(".button-play").style.display = "none";
  document.querySelector(".button-toggleplay").style.display = "block";
  document.querySelector(".button-reset").style.display = "block";
  document.querySelector(".circles").style.display = "block";

  onTogglePlay();
}
