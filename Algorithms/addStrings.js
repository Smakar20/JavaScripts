/*Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */
 
var addStrings = function(num1, num2) {
    var i = num1.length - 1
    var j = num2.length - 1
    var carry = 0
    var output = ''
    while(i >= 0 || j >= 0){
       var sum = ((i >= 0) ? Number(num1[i]) : 0) + ((j >= 0) ? Number(num2[j]) : 0) + carry
        i--
        j--
        var str = String(sum)
        carry = 0
        if(sum > 9){
            carry = Number(str.substr(0,str.length - 1))
            str = str.substr(-1)
        }
        output =  str + output      
    }
    return (carry != 0) ? String(carry) + output : output
};

addStrings('1', '9') //'10'
