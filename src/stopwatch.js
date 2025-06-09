export default class Stopwatch {
  constructor(stopwatch) {
    this.stopwatch = stopwatch;

    this.stopwatch.innerHTML = `
    <div class="container">
    <div class="stopwatch-container">
        <div class="time">0.00</div>
        <svg class="circles" viewBox="0 0 100 100">
          <circle class="circles-big" cx="50%" cy="50%" r="45"></circle>
          <circle class="circles-small" cx="50%" cy="50%" r="3"></circle>
        </svg>
      </div>
      <div class="buttons-container">
        <div class="button-play">Play</div>
        <div class="button-toggleplay">Play</div>
        <div class="button-reset">Reset</div>
      </div>
      </div>
    `;

    this.time = 0;
    this.intervalId = null;
    this.isPlaying = false;

    this.timeElement = this.stopwatch.querySelector(".time");
    this.buttonTogglePlayElement =
      this.stopwatch.querySelector(".button-toggleplay");
    this.buttonResetELement = this.stopwatch.querySelector(".button-reset");
    this.circlesSmallElement = this.stopwatch.querySelector(".circles-small");
    this.circlesBigElement = this.stopwatch.querySelector(".circles-big");
    this.stopwatchElement = this.stopwatch.querySelector(".container");

    this.stopwatch.querySelector(".button-play").onclick = () => this.onPlay();
    this.stopwatch.querySelector(".button-toggleplay").onclick = () =>
      this.onTogglePlay();
    this.stopwatch.querySelector(".button-reset").onclick = () =>
      this.onReset();
  }

  onTogglePlay() {
    if (this.isPlaying) {
      window.clearInterval(this.intervalId);
      this.buttonTogglePlayElement.innerText = "Play";
      this.circlesSmallElement.style.animationPlayState = "paused";

      this.circlesBigElement.classList.add("paused");
      this.circlesSmallElement.classList.add("paused");
      this.buttonTogglePlayElement.classList.add("paused");
      this.buttonResetELement.classList.add("paused");
      this.stopwatchElement.classList.add("paused");
    } else {
      this.intervalId = window.setInterval(() => {
        this.time += 0.1;
        this.timeElement.innerText = this.time.toFixed(2);
      }, 100);
      this.buttonTogglePlayElement.innerText = "Pause";
      this.circlesSmallElement.style.animationPlayState = "running";

      this.circlesBigElement.classList.remove("paused");
      this.circlesSmallElement.classList.remove("paused");
      this.buttonTogglePlayElement.classList.remove("paused");
      this.buttonResetELement.classList.remove("paused");
      this.stopwatchElement.classList.remove("paused");
    }

    this.isPlaying = !this.isPlaying;
  }

  onReset() {
    this.time = 0;
    this.timeElement.innerText = this.time.toFixed(2);
    window.clearInterval(this.intervalId);
    this.buttonTogglePlayElement.innerText = "Play";
    this.isPlaying = false;

    this.stopwatch.querySelector(".button-play").style.display = "block";
    this.stopwatch.querySelector(".button-toggleplay").style.display = "none";
    this.stopwatch.querySelector(".button-reset").style.display = "none";
    this.stopwatch.querySelector(".circles").style.display = "none";

    this.circlesBigElement.classList.remove("paused");
    this.circlesSmallElement.classList.remove("paused");
    this.buttonTogglePlayElement.classList.remove("paused");
    this.buttonResetELement.classList.remove("paused");
    this.stopwatchElement.classList.remove("paused");
  }

  onPlay() {
    this.stopwatch.querySelector(".button-play").style.display = "none";
    this.stopwatch.querySelector(".button-toggleplay").style.display = "block";
    this.stopwatch.querySelector(".button-reset").style.display = "block";
    this.stopwatch.querySelector(".circles").style.display = "block";

    this.onTogglePlay();
  }
}
