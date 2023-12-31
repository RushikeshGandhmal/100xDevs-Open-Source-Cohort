const express = require("express");
const bodyParser = require("body-parser");
// const prompt = require("prompt-sync")();

const app = express();
const port = 3000;

const middleWare = (req, res, next) => {
  console.log("Inside middleWare ", req.headers.counter);
  next();
};

// app.use(middleWare);
app.use(bodyParser.json());

app.get("/:username", (req, res) => {
  console.log(req.params.username);
});

app.get("/", (req, res) => {
  //   const number = Number(prompt("enter a number"));
  const counter = req.query.counter; // query parameter
  const sum = calculateSum(counter);
  res.send(`Calculated sum is ${sum}`);
});

app.post("/handleSum", (req, res) => {
  const counter = req.headers.counter; // header parameter
  const sum = calculateSum(counter);
  res.send(`From Headers, calculated sum is ${sum}`);
});

app.post("/bodyParser", (req, res) => {
  const bodyCounter = req.body.counter; // getting from body which is parsed by body-parser
  if (bodyCounter < 100000) {
    const sum = calculateSum(bodyCounter);
    res.send(`From Body, calculated sum is ${sum}`);
  } else {
    res.status(411).send("You have enterted a large number");
  }
});

app.listen(port, () => {
  console.log(`Example app is listening on ${port}`);
});

const calculateSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
