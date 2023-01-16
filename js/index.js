const time = document.getElementById("time");
const stopbutton = document.querySelector(".stop");
const startbutton = document.querySelector(".start");
const clearbutton = document.querySelector(".clear");

let timerId = 0;

function stopTimer(event) {
  event.preventDefault();
  timer.textContent = timerId;
}

function startTimer(event) {
  event.preventDefault();
  timer.textContent = timerId;
}

function clearTimer(event) {
  event.preventDefault();
  time.textContent = "00:00:00";
  clearInterval(timerId);
}

stopbutton.addEventListener("click", stopTimer);
startbutton.addEventListener("click", startTimer);
clearbutton.addEventListener("click", clearTimer);

//let timeMin = document.getElementById("t")

// function timeToString(time) {
//   let timeHrs = time / 3600000;
//   let hh = Math.floor(timeHrs);

//   let timeMin = (timeHrs - hh) * 60;
//   let mm = Math.floor(timeMin);

//   let timeSec = (timeMin - mm) * 60;
//   let ss = Math.floor(timeSec);

//   let timeMs = (timeSec - ss) * 100;
//   let ms = Math.floor(timeMs);

//   return {timeHrs} :
// }
