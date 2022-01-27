/*
Given a string containing only a, b and c, remove all b and ac.

removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'
What is the time and space complexity of your approach?
*/

// Time: O(n) | Space:  O(n)
function removeChars(input) {
  let letterStack = [];
  for (let letter of input) {
    if (letterStack.length && letter === 'c' && letterStack[letterStack.length - 1] === 'a') {
      letterStack.pop();
      continue;
    }
    if (letter !== 'b') letterStack.push(letter);
  }
  return letterStack.join('');
}
