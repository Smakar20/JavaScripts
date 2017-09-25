/*Have the function ThreeNumbers(str) take the str parameter being passed and determine if exactly three unique, 
single-digit integers occur within each word in the string. The integers can appear anywhere in the word, but they 
cannot be all adjacent to each other. If every word contains exactly 3 unique integers somewhere within it, then return 
the string true, otherwise return the string false. For example: if str is "2hell6o3 wor6l7d2" then your program should 
return "true" but if the string is "hell268o w6or2l4d" then your program should return "false" because all the integers 
are adjacent to each other in the first word.*/

(function ThreeNumbers(str) {
  var arr = str.split(' ')
  for(var i = 0; i < arr.length; i++){
    if(!checkUnique(arr[i])){
      return 'false'
    }
  }
  return 'true'
}('a1a2a3aa b1bb2b3b cc1cc2c3 1dd5dd6dd')) //true

function checkUnique(str){
  var obj = {}
  var temp = ""
  for(var i = 0; i < str.length; i++){
    if(str[i].match(/[0-9]/g) && obj[str[i]] != undefined){
        return false
    }
    else if(str[i].match(/[0-9]/g)){
      obj[str[i]] = str[i]
      temp += str[i]
    }
  }
  if(str.indexOf(temp) != -1) return false
    return true
}
