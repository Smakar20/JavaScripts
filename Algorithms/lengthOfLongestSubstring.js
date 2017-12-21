/*Given a string, find the length of the longest substring without repeating characters.
Examples:
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, 
"pwke" is a subsequence and not a substring.
*/

//method 1:
function lengthOfLongestSubstring(s) {
   if(s.length == 1) return s.length 
   var longestSubStr = '', str = ''
   var strObj = {}
   for(var i = 0; i < s.length; i++){
       if(strObj[s[i]]){
           if(longestSubStr.length < str.length){
               longestSubStr = str
           }
           var idx = str.indexOf(s[i])
           var arr = str.split('')
           arr.splice(0,idx+1)
           str = arr.join('')
       }
       str += s[i]
       strObj[s[i]] = true
   }
   if(str.length > longestSubStr.length) longestSubStr = str
   return longestSubStr.length 
}

//methid 2:
(function lengthOfLongestSubstring(str){
    var obj = {}
    var temp = "", prev = ""
    
   for(var i = 0; i < str.length; i++){
       if(obj[str[i]] == undefined){
           obj[str[i]] = str[i]
           temp += str[i]
       }
       for(var j = i + 1; j < str.length; j++){
        if(obj[str[j]] == undefined){
           obj[str[j]] = str[j]
           temp += str[j]
       }
       else{
           break
       }
      }
      if(prev.length < temp.length){
                prev = temp
      } 
      obj = {}
      temp = ""
   } 
   return prev.length
}('pwwkew'))// 3 as 'wke' is the longest substring
