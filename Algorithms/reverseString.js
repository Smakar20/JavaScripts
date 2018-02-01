//reverse a String

function reverse(arr, sIdx, eIdx){
  var j = 0
  for(var i = sIdx; i <= Math.floor((sIdx + eIdx)/2); i++){
    var temp = arr[i]
    arr[i] = arr[eIdx - j]
    arr[eIdx - j] = temp
    j++
  }
  return arr
}

function solution(str){
  var arr = reverse(str.split(''),0, str.length-1)
  var stIdx = 0, letFound = false
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == ' ' && !letFound){
      stIdx = i + 1
      continue
    }else{
      letFound = true
    }
    
    if(arr[i] == ' '){
      reverse(arr,stIdx,i-1)
      stIdx = i + 1
    }
  }
  reverse(arr,stIdx,arr.length-1)
  return arr.join('')
}


solution('Hello Sohi!!!') //'Sohi!!! Hello'


//---------- alternate method ---------------
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
