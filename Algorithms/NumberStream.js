/*Have the function NumberStream(str) take the str parameter being passed which will contain the numbers 2 through 9, 
and determine if there is a consecutive stream of digits of at least N length where N is the actual digit value. If so, 
return the string true, otherwise return the string false. For example: if str is "6539923335" then your program should 
return the string true because there is a consecutive stream of 3's of length 3. The input string will always contain at 
least one digit. */

(function NumberStream(str) { 
    if(str.length == 1) return 'false'
    var repCount = 1
    for(var i = 1; i < str.length; i++){
        if(str[i] != str[i-1]){
            repCount = 0
        }
        repCount++
        if(repCount >= Number(str[i])) return 'true'
    }
    return 'false'
}("5556293383563665")) //false
