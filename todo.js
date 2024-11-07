const todos = [];
todos[
  {
    name: "Geree tseverleh",
    status: "todo",
  }
];
// todo add

function addOne(newTodo) {
  todos.push(newTodo);
}
// status uurchluh : Func

function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
  console.log(todos);
}

// ner uurchluh

function editName(index, name) {
  let item = todos[index];
  item.name = name;
  console.log(todos);
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
}

addOne({
  name: "Hool hiih",
  status: "todo",
});
addOne({
  name: "JS sudlah",
  status: "todo",
});
addOne({
  name: "Hool hiih",
  status: "todo",
});

editStatus(1, "DONE");

editName(1, "Hicheel hiih");

deleteOne();
