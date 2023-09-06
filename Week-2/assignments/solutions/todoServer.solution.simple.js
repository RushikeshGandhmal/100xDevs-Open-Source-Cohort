const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let todos = [];

// function findIndex(arr, id) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].id === id) return i;
//   }
//   return -1;
// }

// function removeAtIndex(arr, index) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== index) newArray.push(arr[i]);
//   }
//   return newArray;
// }

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  // const todoIndex = findIndex(todos, parseInt(req.params.id));
  // if (todoIndex === -1) {
  //   res.status(404).send();
  // } else {
  //   res.json(todos[todoIndex]);
  // }
  const todoItem = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todoItem) res.status(404).send();
  res.json(todoItem);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  // const todoIndex = findIndex(todos, parseInt(req.params.id));
  // if (todoIndex === -1) {
  //   res.status(404).send();
  // } else {
  //   todos[todoIndex].title = req.body.title;
  //   todos[todoIndex].description = req.body.description;
  //   res.json(todos[todoIndex]);
  // }

  // find mehtod in js will return element whenever first condition match else undefined, it return original element, that's why did direct change using todoItem.title as it gives original object reference.
  const todoItem = todos.find((t) => t.id === parseInt(req.params.id));

  if (!todoItem) res.status(404).send();

  todoItem.title = req.body.title;
  todoItem.description = req.body.description;

  res.json(todoItem);
});

app.delete("/todos/:id", (req, res) => {
  // const todoIndex = findIndex(todos, parseInt(req.params.id));
  // if (todoIndex === -1) {
  //   res.status(404).send();
  // } else {
  //   todos = removeAtIndex(todos, todoIndex);
  //   res.status(200).send();
  // }

  const len = todos.length;
  todos = todos.filter((t) => t.id !== parseInt(req.params.id));

  if (len === todos.length) res.status(404).send();

  res.status(200).send();
});

app.listen(3000, () => {
  console.log("Running on 3000 port");
});

// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

module.exports = app;
