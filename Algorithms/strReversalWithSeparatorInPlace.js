/*Input : "This ....!, is ;;;; a    string"
output: "string ....!, a ;;;; is    This"
basically reverse the string and not words but keep all the separators in place 
separaters are anything but alphanumeric chars.
*/

function solution(str){
  var reg = /[ .!;:,~/\-_()*&^%$#@+=?\'"<>{}[\]|]/
  var regExArr = [],
  words = []
  var regSt = false
  var regStr = '',
  wrdStr = ''
  for(var i = 0; i < str.length; i++){
    if(str[i].match(reg)){
      if(i == 0){
        regSt = true
      }
      
      if(wrdStr != ''){
        words.push(wrdStr)
        wrdStr = ''
      }
      regStr += str[i]
    }else{
      if(regStr != ''){
        regExArr.push(regStr)
        regStr = ''
      }
      wrdStr += str[i]
    }
  }
  if(wrdStr != '') words.push(wrdStr)
  if(regStr != '') regExArr.push(regStr)
  
  words.reverse()
  var i = 0
  var output = ''
  var len = (words.length > regExArr.length) ? words.length : regExArr.length
  while(i < len){
    if(regSt){
      if(regExArr[i] != undefined) output += regExArr[i]
      if(words[i] != undefined) output += words[i]
    }else{
      if(words[i] != undefined) output += words[i]
      if(regExArr[i] != undefined) output += regExArr[i]
    }
    i++
  }
  return output
}


var str = 'This ....!, is ;;;; a    string   =@#$%^&*~()?<>{}[]|'
solution(str) //'string ....!, a ;;;; is    This   =@#$%^&*~()?<>{}[]|'
