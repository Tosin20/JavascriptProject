const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const timer = document.getElementById("time");

let currentValue = 0;

function increaseTimer(event) {
  event.preventDefault();
  //   currentValue = currentValue + 1;
  //   currentValue += 1;
  currentValue++;

  timer.textContent = currentValue;
}

function decreaseTimer(event) {
  event.preventDefault();
  // currentValue = currentValue - 1;
  currentValue--;

  timer.textContent = currentValue;
}

increaseBtn.addEventListener("click", increaseTimer);
decreaseBtn.addEventListener("click", decreaseTimer);
