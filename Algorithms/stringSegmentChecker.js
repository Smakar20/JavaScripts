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
