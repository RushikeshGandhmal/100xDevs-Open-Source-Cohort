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

function removeExtraSpaces(str) {
  let result = "";
  let lastCharWasSpace = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
      lastCharWasSpace = false;
    } else if (!lastCharWasSpace) {
      result += " ";
      lastCharWasSpace = true;
    }
  }
  return result.trim();

  // Use regular expression to replace consecutive spaces with a single space
  // return str.replace(/\s+/g, " ").trim();
}

function passData(err, data) {
  if (err) {
    console.error(err);
    return;
  }

  fs.writeFile("file.txt", removeExtraSpaces(data), "utf8", () => {});
}

fs.readFile("file.txt", "utf8", passData);
