/*Have the function PalindromeSwapper(str) take the str parameter being passed and determine if a palindrome can be created 
by swapping two adjacent characters in the string. If it is possible to create a palindrome, then your program should return 
the palindrome, if not then return the string -1. The input string will only contain alphabetic characters. For example: if 
str is "rcaecar" then you can create a palindrome by swapping the second and third characters, so your program should return 
the string racecar which is the final palindromic string. */

(function PalindromeSwapper(str) { 
    for(var i = 1; i < str.length; i++){
        var temp = str.slice(0,i-1) + str[i] + str[i-1] + str.slice(i+1)
        if(checkPal(temp)) return temp
    }
    return '-1'
}('madam')) // '-1'

function checkPal(str){
    return (str == str.split('').reverse().join('')) ? true : false
}
