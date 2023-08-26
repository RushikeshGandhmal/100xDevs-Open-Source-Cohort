// File cleaner

// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
`
 hello     world    my    name   is       rushikesh
 `;
// After the program runs, the output should be
`
hello world my name is raman
`;

const fs = require("fs");

function removeSpaces(data) {
  let str = "";
  for (const char of data) {
    if (char !== " ") str += char;
  }
  return str;
}

function passData(err, data) {
  if (err) {
    console.error(err);
    return;
  }

  fs.writeFile("file.txt", removeSpaces(data), "utf8", () => {});
}

fs.readFile("file.txt", "utf8", passData);
