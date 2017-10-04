/*Have the function PalindromeCreator(str) take the str parameter being passed and determine if it is possible to create a 
palindromic string of at least 3 characters by removing 1 or 2 characters. For example: if str is "abjchba" then you can 
remove the characters jc to produce "abhba" which is a palindrome. For this example your program should return the two 
characters that were removed with no delimiter and in the order they appear in the string, so jc. If 1 or 2 characters cannot 
be removed to produce a palindrome, then return the string not possible. If the input string is already a palindrome, your 
program should return the string palindrome. 

The input will only contain lowercase alphabetic characters. Your program should always attempt to create the longest 
palindromic substring by removing 1 or 2 characters (see second sample test case as an example). The 2 characters you remove 
do not have to be adjacent in the string. */

(function PalindromeCreator(str) { 
    if(isPal(str)) return 'palindrome'
    for(var i = 0; i < str.length; i++){
        var temp = str
        var arr = temp.split('')
        var chars =arr.splice(i,1)
        temp = arr.join('')
        if(isPal(temp)) return  chars.join('')
    }
    
    for (let i = 0; i < str.length; i++) {
		  let chars = [];
		  for (let j = i; j < str.length; j++) {
			let testArray = str.split('');
			chars[0] = testArray.splice(i, 1);
			chars[1] = testArray.splice(j, 1);
			let newString = testArray.join('');
			if(isPal(newString)) {
				return chars.join('');
			}
		}
	}
    return 'not possible'
}('akannak')) // 'a'

function isPal(str){
    return (str == str.split('').reverse().join('')) ? true : false
}
