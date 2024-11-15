let todos = [];
let inprogress = [];
let done = [];
let blocked = [];
const input = document.getElementById("task-name");
const statusB = document.getElementById("task-status");

function addOne(newTodo) {
  todos.push(newTodo);
}

function editStatus(index) {
  let newstatus = prompt("Change your status");
  if (
    newstatus === "done" ||
    newstatus === "to-do" ||
    newstatus === "in-progress" ||
    newstatus === "blocked"
  ) {
    todos[index].status = newstatus;
    render();
  }
}

function editName(index, name) {
  let item = todos[index];
  item.name = name;
  render();
}

function deleteOne(index) {
  let arr = [];
  for (let i = 0; i < todos.length; i++) {
    if (i !== index) {
      arr.push(todos[i]);
    }
  }
  todos = arr;
  render();
}
function deleteAll() {
  todos = [];
  render();
}
function countDone() {
  let count = 0;
  for (let i = 0; i < todos.length; i++) {
    let item = todos[i];
    if (item.status === "Done") {
      count++;
    }
  }
  return count;
}

function render() {
  const Todo = document.getElementById("todo-tasks");
  const Inprogress = document.getElementById("in-progress-tasks");
  const Done = document.getElementById("done-tasks");
  const Blocked = document.getElementById("blocked-tasks");

  Todo.innerHTML = "";
  Inprogress.innerHTML = "";
  Done.innerHTML = "";
  Blocked.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const containerName = todos[i].status;
    console.log(containerName);
    const todoList = document.getElementById(containerName);
    console.log(todoList);
    let taskList = todoList.querySelector(".tasks");
    const item = todos[i];

    const element = document.createElement("div");
    element.classList.add("todo-item");

    const titleEl = document.createElement("p");
    // titleEl.style.color = "#ffffff";
    titleEl.innerText = `<div class = "todo-item">
    <input type = "chechbox" class= "checkbox" id = "input-${tt}" />

    </div>`;
    " " + " " + item.name;

    const StatusEl = document.createElement("h5");
    StatusEl.classList.add("Status");
    StatusEl.innerText = "status: " + " " + item.status;

    const editIcon = document.createElement("img");
    editIcon.src = "edit.png";
    editIcon.onclick = function () {
      editStatus(i);
    };

    const deletebtnEl = document.createElement("img");
    deletebtnEl.src = "delete.png";
    deletebtnEl.onclick = function () {
      deleteOne(i);
    };

    element.appendChild(titleEl);
    element.appendChild(StatusEl);
    element.appendChild(editIcon);
    element.appendChild(deletebtnEl);

    taskList.appendChild(element);

    if (item.status === "To do") {
      Todo.appendChild(element);
    } else if (item.status === "In progress") {
      Inprogress.appendChild(element);
    } else if (item.status === "Done") {
      Done.appendChild(element);
    } else if (item.status === "Blocked") {
      Blocked.appendChild(element);
    }
  }
}
function addTodo() {
  const modal = document.querySelector("#modal");
  modal.style.display = "block";

  // const input = prompt("Enter todo name");
  // addOne({ name: input, status: "TODO" });
  // render();
}

function saveTodo() {
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
  const inputValue = input.value;
  const statusvalue = statusB.value;

  if (inputValue) {
    addOne({ name: inputValue, status: statusvalue });
    render();
  }
}
