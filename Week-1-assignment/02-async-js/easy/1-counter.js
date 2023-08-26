// Create a counter in JavaScript

// Create a counter in Javascript, It should go up as time goes by in intervals of 1 second

let cnt = 1;
setInterval(() => {
  console.clear();
  console.log(cnt++);
}, 1000);
