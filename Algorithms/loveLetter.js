/*
You have written an anonymous love letter and you don't want your handwriting to be recognized. Since you don't have a printer within reach, you are trying to write this
letter by copying and pasting characters from a newspaper. Given a string L representing the letter and a string N representing the newspaper, return true if L can be 
written entirely from N and false otherwise. The letter includes only ascii characters.
*/

function solution(letters, newsPaper) {
  let lettersMap = {};
  let count = 0;
  for (let letter of letters) {
    if (letter === ' ') continue;
    lettersMap[letter] = (lettersMap[letter] ?? 0) + 1;
    count++;
  }
  for (let letter of newsPaper.split(' ').join('')) {
    if (!!lettersMap[letter]) {
      lettersMap[letter]--;
      count--;
      if (count === 0) return true;
      if (lettersMap[letter] === 0) delete lettersMap[letter];
      continue;
    }
  }
  return false;
}

console.log('should be true ',solution("the love letter", "this is the newspaper string lol total vote"));
console.log('shuld be false ', solution("the love letter", "this is the newspaper string"));
