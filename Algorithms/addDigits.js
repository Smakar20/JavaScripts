/*Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?*/

var addDigits = function(num) {
    if(num==0) return 0
    return (num%9!=0) ? num%9 : 9
    
    //alternate method using recursion:
    /*if(String(num).length == 1) return num
    var str = String(num)
    var sum = 0
    for(var i = 0; i < str.length; i++){
        sum += Number(str[i])
    }
    return addDigits(sum)*/
};

addDigits(38) // 2
