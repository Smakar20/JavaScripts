/*Have the function EvenPairs(str) take the str parameter being passed and determine if a pair of adjacent even numbers 
exists anywhere in the string. If a pair exists, return the string true, otherwise return false. For example: if str is 
"f178svg3k19k46" then there are two even numbers at the end of the string, "46" so your program should return the string 
true. Another example: if str is "7r5gg812" then the pair is "812" (8 and 12) so your program should return the string true.*/
(function EvenPairs(str) { 
    var temp = ""
    for(var i=0; i<str.length;i++){
        if(!isNaN(str[i])){
            if(temp != "" && checkEven(temp, str.slice(i,str.length))) return true
            temp += str[i]
        }else{
          temp = ""
        }
    }
    return false
}('jfb735f9ph8162'))

function checkEven(num, str){
  var temp = ""
  for(var i = 0; i<str.length; i++){
    if(!isNaN(str[i])){
      temp += str[i]
    }
    else{
      break
    }
  }
  return (temp != "" && num%2 == 0 && Number(temp)%2 == 0) ? true : false
}
