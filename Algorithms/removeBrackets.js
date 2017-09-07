/*Have the function RemoveBrackets(str) take the str string parameter being passed, which will contain only the 
characters "(" and ")", and determine the minimum number of brackets that need to be removed to create a string of 
correctly matched brackets. For example: if str is "(()))" then your program should return the number 1. The answer 
could potentially be 0, and there will always be at least one set of matching brackets in the string.*/

(function removeBrackets(str) { 
  let tempArr = []
  for(let i = 0; i < str.length; i++){
     if(tempArr[tempArr.length-1] === '(' && str[i] === ')'){
         tempArr.pop()
     }else{
         tempArr.push(str[i])
     }
  }
  return tempArr.length
}(')()(()()'))
