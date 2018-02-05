/*Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. 
We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True
 */

var checkValidString = function(s) {
  if(s == '') return true
    return (checkFromLeft(s) && checkFromRight(s))
};

function checkFromLeft(s){
    var countOp = 0
    var countCl = 0
    var countSt = 0
    for(var i = 0; i < s.length; i++){
        if(s[i] == '*') countSt++
        if(s[i] == '(') countOp++
        if(s[i] == ')') countCl++
        if(countCl > countSt + countOp) return false
    }
    if(countCl == countOp || (countCl-countOp) <= countSt) return true
    return false
}

function checkFromRight(s){
    var countOp = 0
    var countCl = 0
    var countSt = 0
    for(var i = s.length - 1; i >=0; i--){
        if(s[i] == '*') countSt++
        if(s[i] == ')') countOp++
        if(s[i] == '(') countCl++
        if(countCl > countSt + countOp) return false
    }
    if(countCl == countOp || (countCl-countOp) <= countSt) return true
    return false
}

//------ test ------------
checkValidString('(*))') //true
