/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module

  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt

    - For any other route not defined in the server return 404

    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) return res.status(404).send();
    if (data.length === 0) {
      res.status(404).json("No Item Found, Please add one");
    }
    res.status(200).json(JSON.parse(data));
  });
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) return res.status(404).send();
    const todos = JSON.parse(data);
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if (!todo) res.status(404).send();
    res.status(200).json(todo);
  });
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000),
    title: req.body.title,
    description: req.body.description,
  };
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), "utf-8", (err, data) => {
      if (err) res.status(404).send();
      res.status(201).json(newTodo);
    });
  });
});

app.put("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const index = todos.findIndex((t) => {
      return t.id === parseInt(req.params.id);
    });
    if (index == -1) res.status(404).send();

    const updatedTodo = {
      id: todos[index].id,
      title: req.body.title,
      description: req.body.description,
    };
    todos[index] = updatedTodo;
    fs.writeFile("todos.json", JSON.stringify(todos), "utf-8", (err, data) => {
      if (err) throw err;
      res.status(201).json(updatedTodo);
    });
  });
});

app.delete("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const index = todos.findIndex((t) => {
      return t.id === parseInt(req.params.id);
    });
    if (index == -1) res.status(404).send();
    todos.splice(index, 1);
    fs.writeFile("todos.json", JSON.stringify(todos), "utf-8", (err, data) => {
      if (err) throw err;
      res.status(201).send();
    });
  });
});

// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(3000, () => {
  console.log("Listing on port 3000!");
});

// module.exports = app;
