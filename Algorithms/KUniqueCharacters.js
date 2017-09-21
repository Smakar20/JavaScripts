/*Have the function KUniqueCharacters(str) take the str parameter being passed and find the longest substring that contains 
k unique characters, where k will be the first character from the string. The substring will start from the second position 
in the string because the first character will be the integer k. For example: if str is "2aabbacbaa" there are several 
substrings that all contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"], but your program should return "aabba" 
because it is the longest substring. If there are multiple longest substrings, then return the first substring encountered 
with the longest length. k will range from 1 to 6.*/

(function KUniqueCharacters(str) { 
 var k = Number(str[0]), obj = {}, temp = "", count = 0, outputStr = ""
 if(k < 1 || k > 6) return
 for(var i = 1; i < str.length; i++){
   if(obj[str[i]] == undefined){
     obj[str[i]] = str[i]
     temp += str[i]
     count += 1
   }
   
   for(var j = i+1; j < str.length; j++){
     if(obj[str[j]] == undefined && count < k){
       obj[str[j]] = str[j]
       temp += str[j]
       count += 1
     }else if(count <= k && obj[str[j]] != undefined){
       temp += str[j]
     }else{
       break
     }
   }
   if(outputStr.length < temp.length) outputStr = temp
   obj = {}
   temp = ""
   count = 0
 }
 return outputStr
}('3kkooflllllffvkl')) //ooflllllff
