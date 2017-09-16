/*Have the function NumberEncoding(str) take the str parameter and encode the message according to the following rule: encode every 
letter into its corresponding numbered position in the alphabet. Symbols and spaces will also be used in the input. For example: if str 
is "af5c a#!" then your program should return 1653 1#!.*/

(function NumberEncoding(str) { 
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var str1 = str.toLowerCase()
    var output = ""
    for(var i in str1){
        if(str1[i].match(/^[a-z]+$/)){
            output += alphabet.indexOf(str1[i]) + 1
        }
        else{
            output += str1[i]
        }
    }
    return output
}('af5c a#!')) // 1653 1#!
