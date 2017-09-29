/*Have the function ASCIIConversion(str) take the str parameter being passed and return a new string where every character, 
aside from the space character, is replaced with its corresponding decimal character code. For example: if str is "dog" then 
your program should return the string 100111103 because d = 100, o = 111, g = 103. Use the Parameter Testing feature in the 
box below to test your code with different arguments.*/

(function ASCIIConversion(str) { 
    var opStr = ""
    for(var i = 0; i < str.length; i++){
         opStr += (str[i] == " ") ? str[i] : str.charCodeAt(i)
    }
    return opStr
}('dog'))
