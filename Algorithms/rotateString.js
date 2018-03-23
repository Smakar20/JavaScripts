/*We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, 
if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of 
shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false
Note:

A and B will have length at most 100.*/

var rotateString = function(A, B) {
    if(A === B) return true
    var possibleShifts = A.length
    var found = false
    var str = A
    var count = 0
    while(!found){
        str = str.slice(1) + str.slice(0,1)
        count += 1
        if(count >= possibleShifts) return false
        if(str === B) return true
    }
};

rotateString('abcde','cdeab') //true
