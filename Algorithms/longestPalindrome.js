/*Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:
Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
 

Example:
Input: "cbbd"

Output: "bb"
*/
var longestPalindrome = function(s) {
    var output = ''
    var count = 0
    for(var i = 0; i < s.length; i++){
        var str = checkPalindrome(s,i,i)
        if(count < str.length){
            count = str.length
            output = str
        }
    }
    
    for(var i = 0; i < s.length - 1; i++){
        var str = checkPalindrome(s,i,i+1)
        if(count < str.length){
            count = str.length
            output = str
        }
    }
    return output
};

function checkPalindrome(s,l,r){
    while(l >= 0 && r < s.length && s[l] == s[r]){
        l--
        r++
    }
    return s.slice(l+1,r)
}


longestPalindrome('babad') // 'bab'

//-------- method 2 ------------
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

function isPalindrome(str){
  return (str == str.split('').reverse().join(''))
}
