// Counter without setInterval

var cnt = 1;

function run() {
  // infinite loop
  console.clear();
  console.log(cnt++);
  setTimeout(run, 1000);
}

run();
