/*Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"*/

//-------- method 1 ------------
var longestPalindrome = function(s) {
  if(s.length > 1000) return
  if(s.length == 1) return s
  var pal = '', str = ''
  var dupS = s.slice()
  for(var i = 0; i < dupS.length; i++){
    str += dupS[i]
    if(isPalindrome(str) && pal.length < str.length) pal = str
    if(i == dupS.length - 1){
        str = ''
        dupS = dupS.slice(1)
        i = -1 // as i++ will set i to 0
    }
  }
  return pal
}

longestPalindrome('cbbd') //'bb'

//------ method 2 ------------------
/*function longestPalindrome(s){
  if(s.length > 1000) return 
  if(s.length == 1) return s
  var pal = ''
  for(var i = 0; i < s.length-1; i++){
    var str = s[i]
    for(var j = i + 1; j < s.length; j++){
      if(isPalindrome(str) && pal.length < str.length) pal = str
      str += s[j]
    }
    if(isPalindrome(str) && pal.length < str.length) pal = str
  }
  return pal
}*/

function isPalindrome(str){
  return (str == str.split('').reverse().join(''))
}
