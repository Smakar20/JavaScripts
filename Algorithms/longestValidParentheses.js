/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
 */

// O(n3) solution
var longestValidParentheses = function(s) {
    var longest = 0;
    for (var i = 0; i < s.length; i++){
        for (var j = i + 2; j <= s.length; j+=2){
            if(isValid(s.substring(i,j))){
                longest = Math.max(longest, j-i)
                console.log('longest: ', longest)
            }
        }
    }
    return longest;
};

function isValid(s){
  console.log('s is: ', s)
    var stack = [];
    for (var i = 0; i < s.length; i++){
        if (s[i] === '('){
            stack.push(s[i]);
        } else if (stack.length != 0 && stack[stack.length - 1] === '('){
            stack.pop();
        } else {
            return false;
        }
    }
    return (stack.length === 0);
}

// O(n2) solution

var longestValidParentheses = function(s) {
    var longest = 0;
    for (var i = 0; i < s.length; i++){
        var count = 0;
        for(var j = i; j < s.length; j++){
            if (s[j] === '('){
                count++;
            } 
            else {
                count--;
            }
            
            if (count < 0) break;
            
            if (count === 0){
                if(j - i + 1 > longest) longest = j - i + 1;
            }
        }
    }
    return longest;
};

//------ test --------------

longestValidParentheses('((())') //4
