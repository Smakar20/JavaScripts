/*Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
*/

var isMatch = function(s, p) {
    var m = s.length, n = p.length
    var count = 0
    for (var i = 0; i < n; i++) {
            if (p[i] == '*') count++
        }
        if (count == 0 && m != n) return false
        if (n - count > m) return false
        
        var match = new Array(m+1)
        match[0] = true
        for (var i = 0; i < m; i++) {
            match[i+1] = false
        }
        for (var i = 0; i < n; i++) {
            if (p[i] == '*') {
                for (var j = 0; j < m; j++) {
                    match[j+1] = match[j] || match[j+1]
                }
            } else {
                for (var j = m-1; j >= 0; j--) {
                    match[j+1] = (p[i] == '?' || p[i] == s[j]) && match[j]
                }
                match[0] = false
            }
        }
        return match[m]
}

isMatch("aa","a") //false
