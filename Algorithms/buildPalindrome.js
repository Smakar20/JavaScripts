/*Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those 
letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.*/

var longestPalindrome = function(s) {
    if(s == '' || s == null) return 0
    if(s.length == 1) return 1
    var count = 0
    var charObj = {}
    for(var i = 0; i < s.length; i++){
        if(charObj[s[i]] == undefined){
            charObj[s[i]] = true
        }else{
            delete charObj[s[i]]
            count++
        }
    }
    if(Object.keys(charObj) == 0) return count*2
    return count*2 + 1
};

longestPalindrome("abccccdd") // 7
