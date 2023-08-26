/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length === 1) return true;
  str = str.toLowerCase();

  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (/^[a-zA-Z]$/.test(str[i]) && /^[a-z]$/.test(str[j])) {
      if (str[i++] !== str[j--]) {
        return false;
      }
    } else if (/^[a-zA-Z]$/.test(str[i])) j--;
    else i++;
  }
  return true;
}

module.exports = isPalindrome;
