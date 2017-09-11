/*Have the function CamelCase(str) take the str parameter being passed and return it in proper camel case format where 
the first letter of each word is capitalized (excluding the first letter). The string will only contain letters and some 
combination of delimiter punctuation characters separating each word. 

For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding. */

function CamelCase(str) { 

  // code goes here
  let arr = str.toLowerCase().split(/[,.~!@#$%^&*()\-_+' ']/)
  let outputStr = ""
  for(let i = 0; i < arr.length; i++){
      if(i == 0){
          outputStr += arr[i]
          continue
      }
      
      outputStr += arr[i][0].toUpperCase() + arr[i].split('').slice(1, arr[i].split('').length).join('')
  }
  return outputStr       
}
