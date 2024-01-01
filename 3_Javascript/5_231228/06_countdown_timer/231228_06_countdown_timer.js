const timer = document.getElementById("timer");
const dayDiv = document.getElementById("days");
const hourDiv = document.getElementById("hours");
const minDiv = document.getElementById("minutes");
const secDiv = document.getElementById("seconds");
const startBtn = document.querySelector(".start-btn");
const setBtn = document.querySelector(".set-btn");

let days, hours, mins, secs;
let intervalId;

function countdown(yy, mm, dd, hh) {
  const now = new Date();
  const dday = new Date(yy, mm, dd, hh);
  const diff = dday - now;
  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor(diff / (1000 * 60));
  const s = Math.floor(diff / 1000);
  hours = h - days * 24;
  mins = m - h * 60;
  secs = s - m * 60;

  dayDiv.innerText = String(days).padStart(2, "0");
  hourDiv.innerText = String(hours).padStart(2, "0");
  minDiv.innerText = String(mins).padStart(2, "0");
  secDiv.innerText = String(secs).padStart(2, "0");

  if (diff <= 1) {
    clearInterval(intervalId);
    animationState("paused");
  }
}

function animationState(state) {
  secDiv.style.animationPlayState = state;
  minDiv.style.animationPlayState = state;
  hourDiv.style.animationPlayState = state;
  dayDiv.style.animationPlayState = state;
}

startBtn.addEventListener("click", () => {
  alert("D-day를 입력해주세요.");
  const y = prompt("년");
  const m = prompt("월");
  const d = prompt("일");
  const h = prompt("시");

  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(countdown, 1000, y, m - 1, d, h);
  minDiv.style.top = 500 + "px";
  console.log(secs);
  // minDiv.style.top = (secs / 60) * 100 + "%";
  // hourDiv.style.top = `(${mins} / 60 * 100)%`;
  // dayDiv.style.top = `(${hours} / 24 * 100)%`;
  animationState("running");
});
