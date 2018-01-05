/*Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21*/

function reverse(x){
    var range = Math.pow(2,31)
    var str = String(x)
    var output = (str[0] == '-') ? Number(str[0] + str.slice(1).split('').reverse().join('')) : Number(str.split('').reverse().join('')) 
    if(output < Number('-'+range) || output > range - 1) return 0
    return output
}
