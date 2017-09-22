/*Have the function SimplePassword(str) take the str parameter being passed and determine if it passes as a valid password that follows the list of constraints: 

1. It must have a capital letter.
2. It must contain at least one number.
3. It must contain a punctuation mark.
4. It cannot have the word "password" in the string.
5. It must be longer than 7 characters and shorter than 31 characters.

If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. For example: if str is "apple!M7" then your program should return "true". */
(function SimplePassword(str) { 
    if(str.length <= 7 || str.length >= 31) return 'false'
    
    if(str.toLowerCase().indexOf('password') != -1) return 'false'
    
    var cap = false, num = false, punc = false
    
    for(var i = 0; i < str.length; i++){
        if(str[i].match(/[A-Z]/g)){
          console.log('str cap: ', str[i])
            cap = true
        }
        else if(str[i].match(/[0-9]/g)){
          console.log('str num: ', str[i])
            num = true
        }
        else if(str[i].match(/[~!@#$%^&*(){}<>?/\-_+=.,]/g)){
          console.log('str punc: ', str[i])
            punc = true
        }
    }
    return (cap && num && punc) ? 'true' : 'false'
}('turkey90AAA?,,.')) //true
