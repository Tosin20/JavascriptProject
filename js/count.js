const increasebutton = document.querySelector(".increase");
const decreasebutton = document.querySelector(".decrease");
const timer = document.getElementById("time");

let counter = 0;

function increaseTime(event) {
  event.preventDefault();

  counter++;

  timer.textContent = counter;

  // console.log(counter);
}

function decreaseTime(event) {
  event.preventDefault();
  counter--;

  timer.textContent = counter;
}

increasebutton.addEventListener("click", increaseTime);
decreasebutton.addEventListener("click", decreaseTime);
