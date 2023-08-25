/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  test your code by running 
  - `npm run test-anagram`
*/

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ")
      count[s[i].toLowerCase().charCodeAt(0) - "a".charCodeAt(0)]++;
    if (t[i] !== " ")
      count[t[i].toLowerCase().charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  for (const i of count) {
    if (i !== 0) return false;
  }
  return true;
}

module.exports = isAnagram;
