/*Given an input string and a dictionary of words, find out if the input string can be segmented into a space-separated 
sequence of dictionary words. See following examples for more details.

Consider the following dictionary 
{ i, like, sam, sung, samsung, mobile, ice, 
  cream, icecream, man, go, mango}

Input:  ilike
Output: Yes 
The string can be segmented as "i like".

Input:  ilikesamsung
Output: Yes
The string can be segmented as "i like samsung" 
or "i like sam sung".
*/

function stringSegmentChecker(str){
  var dictionary = ['i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice', 
  'cream', 'icecream', 'man', 'go', 'mango']
  var temp = ''
  if(dictionary.includes(str) || str.length == 0) return 'Yes'
  for(var i = 0; i < str.length; i++){
    temp += str[i]
    if(dictionary.includes(temp)){
      return stringSegmentChecker(str.slice(i+1))
    }
  }
  return 'No'
}

console.log(stringSegmentChecker('ilikesamsung')) //Yes
console.log(stringSegmentChecker('iiiiiiii')) //Yes
console.log(stringSegmentChecker('samsungandmangok')) //No
console.log(stringSegmentChecker('ilikelikeimangoiii')) //Yes
console.log(stringSegmentChecker('')) //Yes
//--------------------------------------------------------------
/*Given an input string and a dictionary of words, find out if the input string can be segmented into a space-separated 
sequence of dictionary words. See following examples for more details.
Consider the following dictionary 
{ i, like, sam, sung, samsung, mobile, ice, 
  cream, icecream, man, go, mango}
Input:  ilike
Output: [ 'i', 'like' ] 
The string can be segmented as "i like".
Input:  ilikesamsung
Output: [ 'i', 'like', 'samsung' ]
The string can be segmented as "i like samsung" 
or "i like sam sung".
*/

function stringSegmentChecker(str){
  var dictionary = ['i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice', 
  'cream', 'icecream', 'man', 'go', 'mango']
  var temp = ''
  var output = []
  if(dictionary.includes(str)) return [str]
  if(str.length == 0) return output
  for(var i = 0; i < str.length; i++){
    temp += str[i]
    if(dictionary.includes(temp)){
      output.push(temp)
      return output.concat(stringSegmentChecker(str.slice(i+1)))
    }
    //alternate - start
    /*if(dictionary.includes(temp)){
      output.push(temp)
      temp = ''
    }*/
    //alternate - end
  }
  return output
}

console.log(stringSegmentChecker('ilike')) //[ 'i', 'like' ]
console.log(stringSegmentChecker('ilikesamsung')) //[ 'i', 'like', 'sam', 'sung' ]
console.log(stringSegmentChecker('iiiiiiii')) //[ 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i' ]
