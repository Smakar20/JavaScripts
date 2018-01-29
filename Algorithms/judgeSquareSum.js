/*Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:
Input: 3
Output: False
*/

var judgeSquareSum = function(c) {
  if(c == 0 || c == 1) return true
  var i = 0, j = parseInt(Math.sqrt(c))
  while(i <= parseInt(Math.sqrt(c)) && j >= 0){
    if((i*i + j*j) == c) return true
    if((i*i + j*j) > c) j--
    if((i*i + j*j) < c) i++
  }
  return false
}

judgeSquareSum(5) //true

