let todos = [];
let inprogress = [];
let done = [];
let blocked = [];
// todo add

function addOne(newTodo) {
  todos.push(newTodo);
}
// status uurchluh : Func

function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}

// ner uurchluh

function editName(index, name) {
  let item = todos[index];
  item.name = name;
  render();
}
// todo delete one item

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

//    RUNNING APPLICATION

function render() {
  for (let i = 0; i < todos.length; i++) {
    const containerName = `#${todos[i].status}`;
    const todoList = document.querySelector(containerName);
    console.log(todoList);
    const taskList = todoList.querySelector(".tasks");
    taskList.innerHTML = "";
    const item = todos[i];

    //  Create name

    const element = document.createElement("div");
    element.classList.add("todo-item");

    //  Create task name
    const titleEl = document.createElement("p");
    titleEl.style.color = "#ffffff";
    titleEl.innerText = item.name;

    // Create edit button
    const btnEl = document.createElement("Button");
    btnEl.innerText = "Edit";
    btnEl.onclick = function () {
      const newName = prompt("Enter new name");
      editName(i, newName);
    };
    // Delete button
    const deletebtnEl = document.createElement("Button");
    deletebtnEl.innerText = "Delete";
    deletebtnEl.onclick = function () {
      deleteOne(i);
    };
    const circle = document.createElement("circle");
    circle.style.color = "#fff";

    element.appendChild(titleEl);
    element.appendChild(btnEl);
    element.appendChild(deletebtnEl);
    element.appendChild(circle);
    taskList.appendChild(element);
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
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;
  todos.push({
    name: inputValue,
    status: statusValue,
  });
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
  render();
}
