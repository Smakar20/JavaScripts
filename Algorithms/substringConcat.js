/*Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring 
together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
Example 1:
Input: "abab" Output: True Explanation: It's the substring "ab" twice.*/

(function substringConcat(str){
  if(str.length > 10000) return
  var subStrs = createSubStr(str)
  for(var s of subStrs){
    var multiplierStr = ''
    var i = 2
    while(multiplierStr.length <= str.length){
      if(multiplierStr == str) return true
      multiplierStr = multiplier(s, i++)
      
    }
  }
  return false
})('abcabc') // true

function multiplier(str, i){
  var output = str
  var n = 1
  while(n < i){
    output += str
    n++
  }
  return output
}

function createSubStr(str){
  var arr = []
  for(var i = 0; i < str.length/2; i++){
    arr.push(str.slice(0,i+1))
  }
  return arr
}
