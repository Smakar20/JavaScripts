/*Have the function longestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.*/

function longestWord(sen) { 
  let arr = sen.replace(/[^\w\s]/gi, '').split(' ')
  let longest = ''
  let len = 0
  for(let char of arr){
      if(char == ' ') continue
      
      if(char.length > len){
          longest = char
          len = char.length
      }
  }
  return longest
}
   
// keep this function call here 
LongestWord('fun&!! time')
