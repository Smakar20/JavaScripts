/*Implement pow(x, n).


Example 1:

Input: 2.00000, 10
Output: 1024.00000

Example 2:

Input: 2.10000, 3
Output: 9.26100
*/

var myPow = function(x, n) {
  var output = myPowUtil(x, Math.abs(n), 1)
  output = (n < 0) ? 1/output : output
  return output
};

function myPowUtil(x,n,output){
  if(n == 0) return output
  var temp = x
  var i = 1
  var int = 1 
  while(i <= n)
  {
    int = temp
    temp *= temp
    i *= 2
  } 
  return myPowUtil(x,(n-i/2),output*int) 
}
