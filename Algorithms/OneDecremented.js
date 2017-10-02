/*Have the function OneDecremented(num) count how many times a digit appears that is exactly one less than the previous digit. 
For example: if num is 5655984 then your program should return 2 because 5 appears directly after 6 and 8 appears directly 
after 9. The input will always contain at least 1 digit.*/

function OneDecremented(num) { 
    if(num.toString().length == 1) return 0
    var count = 0
    var str = num.toString()
    for(var i = 1; i < str.length; i++){
        if(Number(str[i]) == Number(str[i-1]) - 1) count += 1
    }
    return count
}
