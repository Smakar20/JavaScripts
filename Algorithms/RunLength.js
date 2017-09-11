/*Have the function RunLength(str) take the str parameter being passed and return a compressed version of 
the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each 
repeating character and outputting that number along with a single character of the repeating sequence. 
For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. */

function RunLength(inpStr) { 

  // code goes here
  let str = inpStr.toLowerCase()
  let count = 1, prev = str[0]
  outputStr = ""
  if(str.length == 1) outputStr = count + prev
  
  for(let i=1; i<str.length; i++){
      if(prev != str[i]){
         outputStr += count + prev
         count = 1
         prev = str[i]
      }
      else{
          count++
      }
      
      if(i == str.length - 1){
          outputStr += count + prev
      }
  }
  return outputStr    
}
