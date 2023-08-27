const express = require("express");
// const prompt = require("prompt-sync")();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   const number = Number(prompt("enter a number"));
  const counter = req.query.counter; // query parameter
  const sum = calculateSum(counter);
  res.send(`Calculated sum is ${sum}`);
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
