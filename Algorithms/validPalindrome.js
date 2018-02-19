/*Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/

var validPalindrome = function(s) {
    var i = 0 , j = s.length-1
    while(i < j && s[i] == s[j]){
        i++
        j--
    }
    
    if(i >= j) return true
    return (isPalindrome(s,i+1,j) || isPalindrome(s,i,j-1))
};

function isPalindrome(s, i, j){
    while(i < j){
        if(s[i] == s[j]){
            i++
            j--
        }else{
            return false
        }
    }
    return true
}

validPalindrome('aba') //true
