/*Have the function NextPalindrome(num) take the num parameter being passed and return the next largest palindromic number. 
The input can be any positive integer. For example: if num is 24, then your program should return 33 because that is the next 
largest number that is a palindrome.*/

(function NextPalindrome(num) {
    if(num < 0) return 'not a valid input'
    var found = false
    var temp = num
    while(!found){
        if(num < 10) return num + 1
        temp += 1
        if(isPalindrome(temp.toString())){
            found = true
        }
    }
    return temp
}(24))

function isPalindrome(str){
    for(var i = 0; i < Math.ceil(str.length/2); i++){
        if(str[i] != str[str.length - 1 - i]) return false
    }
    return true
}
