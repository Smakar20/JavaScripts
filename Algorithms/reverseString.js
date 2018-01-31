//reverse a String

function reverseString(str){
  var reversedStr = ''
  for(var i = str.length - 1; i >= 0; i--){
    reversedStr += str[i]
  }
  return reversedStr
}

function solution(str){
  var reversedStr = reverseString(str)
  var finalStr = '', temp = ''
  for(var i = 0; i < reversedStr.length; i++){
    if(i == reversedStr.length - 1) temp += reversedStr[i]
    if((reversedStr[i] == ' ' || i == reversedStr.length - 1) && temp != ''){
      finalStr += reverseString(temp).trim() + ' '
      temp = ''
    }else{
      temp += reversedStr[i]
    }
  }
  return finalStr.trim()
}

solution('Hello Sohi!!!')
