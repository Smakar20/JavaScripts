/*
Given a string which might have duplicate letters, write a function to find the first duplicate.


firstDuplicate('abca')
// 'a'

firstDuplicate('abcdefe')
// 'e'

firstDuplicate('abcdef')
// null
What is the time & space cost of your approach ? Can you do better?
*/

function firstDuplicate(str) {
  if (!str?.length) return null;
// Time: O(n) | Space: O(n)
  let chars = new Set();
  for (let s of str) {
    if (chars.has(s)) return s;
    chars.add(s);
  }
// Time: O(nlog(n)) | Space: O(n)
  // let newStr = [...str].sort().join('');
  // for (let i = 0; i < newStr.length - 1; i++) {
  //   if(newStr[i] === newStr[i + 1]) return newStr[i];
  // }
  return null;
}
