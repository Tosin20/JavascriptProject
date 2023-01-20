const addBtn = document.querySelector(".add-btn");
// const doneBtn = document.querySelector(".done-btn");
// const deleteBtn = document.querySelector(".delete-btn");
const totalTask = document.querySelector("#total-task");
const input = document.querySelector("#add-task");
const itemList = document.querySelector(".item-list");

let taskNumber = 0;
totalTask.textContent = `Total task (${taskNumber})`;

function addButton(event) {
  event.preventDefault();
  if (input.value == null || input.value == "") {
    alert("You must write something!");
    return;
  }
  taskNumber++;
  totalTask.textContent = `Total task (${taskNumber})`;

  createTask();

  clear();
}

function createTask() {
  const newTask = document.createElement("div");
  newTask.classList.add("new-task");

  const list = document.createElement("div");
  const para = document.createElement("p");

  const date = new Date().toString();
  console.log(date.split("G"));
  para.textContent = date.split("G")[0];
  para.setAttribute("id", "date-time");
  
  const label = document.createElement("label");
  label.setAttribute("id", "task");
  label.textContent = input.value;
  list.appendChild(para);
  list.appendChild(label);

  const doneBut = document.createElement("button");
  const deleteBut = document.createElement("button");

  const completedText = document.createElement("div");

  const paraTwo = document.createElement("p");
  paraTwo.setAttribute("id", "completed");
  paraTwo.textContent = "Completed";
  completedText.style.display = "none";
  completedText.appendChild(paraTwo);

  doneBut.addEventListener("click", doneButton);
  deleteBut.addEventListener("click", deleteButton);

  doneBut.textContent = "Done";
  doneBut.classList.add("done-btn");
  deleteBut.textContent = "Delete";
  deleteBut.classList.add("delete-btn");

  newTask.appendChild(list);
  newTask.appendChild(doneBut);
  newTask.appendChild(deleteBut);
  newTask.appendChild(completedText);
  itemList.appendChild(newTask);
}

function clear() {
  input.value = "";
}

function doneButton(event) {
  event.preventDefault();

  //to get sibling element to make it hidden
  //this referes to the current element
  const buttonRemove = this.nextSibling;
  const completed = buttonRemove.nextSibling;
  this.style.display = "none";
  buttonRemove.style.display = "none";
  completed.style.display = "block";
}

function deleteButton(event) {
  event.preventDefault();

  const newTask = this.parentNode;
  const parent = newTask.parentNode;
  parent.removeChild(newTask);

  taskNumber--;
  totalTask.textContent = `Total task (${taskNumber})`;
}

addBtn.addEventListener("click", addButton);
