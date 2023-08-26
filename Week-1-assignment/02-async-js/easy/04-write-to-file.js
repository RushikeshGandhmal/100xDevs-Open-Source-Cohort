// Write to a file

const fs = require("fs");

const data = "This content will replace original";

function afterDataWritten(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data written successfully");
}
fs.writeFile("text.txt", data, "utf8", afterDataWritten);
