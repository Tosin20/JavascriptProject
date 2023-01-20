const generateButton = document.querySelector("#button");
const quote = document.querySelector("#quote");

var myArray = ["Pray Always", "Don't lie", "Drink water"];

function generateBtn(event) {
  event.preventDefault();
  var randomItem = myArray[Math.floor(Math.random() * 3)];

  quote.textContent = randomItem;
}

generateButton.addEventListener("click", generateBtn);
