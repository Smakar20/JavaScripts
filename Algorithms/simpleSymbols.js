/*Have the function simpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.*/

(function simpleSymbols(str){
  let regExp = /^[A-z]+$/
  if(str.length == 1){
    if(str.match(regExp)) return false
    return true
  }
  if(str[0].match(regExp) || str[str.length-1].match(regExp)) return false
  for(let i = 0; i < str.length; i++){
    if((str[i].match(regExp) && str[i-1] != "+") || (str[i].match(regExp) && str[i+1] != "+")) return false
  }
  return true
}("+a+1+a+==="))
