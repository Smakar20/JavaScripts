/*Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 */
 
var countSubstrings = function(s) {
    var count = 0
    for(var i = 0; i < s.length; i++){
      count += checkPalindrome(s,i,i)
      count += checkPalindrome(s,i,i+1)
    }
    return count
};

function checkPalindrome(s,l,r){
    var count = 0
    while(l >= 0 && r < s.length && s[l] == s[r]){
        l--
        r++
        count++
    }
    return count
}

//-------test-----------
countSubstrings('aaa') // 6
