/*Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.

Subsequence

A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

Example subsequence

Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".*/

function LCS(x, y) {
  var outputStr = ''
  var firstStr = x
  for(var i = 0; i < y.length; i++){
    for(var j = 0; j < firstStr.length; j++){
      if(firstStr[j] == y[i]){
        console.log('firstStr: ', firstStr)
        outputStr += y[i]
        var arr = firstStr.split('')
        arr.splice(0,j+1)
        firstStr = arr.join('')
        break
      }
    }
  }
  return outputStr
}
//LCS('finaltest','zzzfinallyzzz') // "final"
//LCS( "anothertest" , "notatest" ) // returns "nottest"

