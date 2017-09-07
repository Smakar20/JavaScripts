/*Have the function WildcardCharacters(str) read str which will contain two strings separated by a space. The first string will consist of the following sets of characters: +, *, and {N} which is optional. The plus (+) character represents a single alphabetic character, the asterisk (*) represents a sequence of the same character of length 3 unless it is followed by {N} which represents how many characters should appear in the sequence where N will be at least 1. Your goal is to determine if the second string exactly matches the pattern of the first string in the input. 

For example: if str is "++*{5} gheeeee" then the second string in this case does match the pattern, so your program should return the string true. If the second string does not match the pattern your program should return the string false.*/

function WildcardCharacters(str) { 

  // code goes here 
  let strArr= str.split(' ')
  let specChar = strArr[0]
  let charStr = strArr[1].split('')
  
  let arr = specChar.split('')
  let letters = /^[A-Za-z]+$/
  let i = 0
  while(i< arr.length){
      if(arr[i] == '+'){
          if(!charStr[0].match(letters)) return "false"
         charStr = charStr.slice(1,charStr.length)
      }
      else if(arr[i] == '*'){
          let curr = charStr[0]
          let j = 1, k = 0
          if(arr[i+1] != undefined && arr[i+1] == '{'){
              k = arr[i+2]
              i = i+4
          }else{
              k = 3
              i++
          }
          
          while(j < k){
            charStr = charStr.slice(1,charStr.length)
            if(charStr[0] != curr) return "false"
            j++
          }
          charStr = charStr.slice(1,charStr.length)
          continue
      }
      i++ 
    }
    if(charStr.length != 0) return 'false'
     return "true" 
}

// keep this function call here 
WildcardCharacters("+++++* abcdemmmmmm");                            
