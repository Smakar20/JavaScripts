/*Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons).

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

*/

function letterCombinations(digits){
  if(digits == '') return []
  var output = []
  letterCombinationsUtil(digits, '', output)
  return output
}

function letterCombinationsUtil(phoneNumber, alphaCodesSoFar, output) {
  if (phoneNumber.length == 0) {
    output.push(alphaCodesSoFar)
    console.log(alphaCodesSoFar)
    return
  }
  
  var options = getOptions(phoneNumber[0])
  for (op of options) {
    letterCombinationsUtil(phoneNumber.slice(1), alphaCodesSoFar+op, output)
  }
}

var m = new Map()
m.set('2', ['a','b','c'])
m.set('3', ['d','e','f'])
m.set('4', ['g','h','i'])
m.set('5', ['j','k','l'])
m.set('6', ['m','n','o'])
m.set('7', ['p','q','r','s'])
m.set('8', ['t','u','v'])
m.set('9', ['w','x','y','z'])

function getOptions(digit) {
  return m.get(digit)
}

letterCombinations('23'.split(''), '') // [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]
