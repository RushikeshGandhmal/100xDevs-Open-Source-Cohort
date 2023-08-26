// Reading the contents of a file

const fs = require("fs");

const print = (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
};

// step2: wait until sync code get's execute i.e calulatiing sum
fs.readFile("text.txt", "utf8", print);

// step1: calculates sum
let sum = 0;
for (let i = 0; i < 10000000000; i++) {
  sum += i;
}
console.log(sum);
