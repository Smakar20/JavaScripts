/*
Given a non-empty string, return the most frequently occurring character.

If there are multiple characters with same occurrance, return an array of them.

count('abbccc')
// 'c'

count('abbcccddd')
// ['c', 'd']
*/

function count(str) {
  let charObj = {};
  for (let s of str) {
    charObj[s] = (charObj[s] ?? 0) + 1;
  }
  const maxNum = Math.max(...Object.values(charObj));
  let output = [];
  for (let c in charObj) {
    if (charObj[c] === maxNum) output.push(c);
  }
  return output.length === 1 ? output[0] : output;
}
