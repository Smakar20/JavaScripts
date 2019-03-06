
/*
Steve has a string of lowercase characters in range ascii[‘a’..’z’]. He wants to reduce the string to its shortest length by doing a series
of operations. In each operation he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string 
aab could be shortened to b in one operation.

Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, 
print Empty String

Function Description

Complete the superReducedString function in the editor below. It should return the super reduced string or Empty String if the final string 
is empty.

superReducedString has the following parameter(s):

s: a string to reduce
Input Format

A single string, .

Constraints

Output Format

If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

Sample Input 0

aaabccddd
Sample Output 0

abd
 */

function superReducedString(s) {
    for (var i = 0; i < s.length; i++){
      if (s[i] === s[i-1]){
        s = s.substr(0,i-1) + s.substr(i+1);
        i = 0;
      }
    }
    return (s === '') ? 'Empty String' : s;
}


//----------------------------
superReducedString('kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuerhhsanpdtmrzibswswzjjbjqytgfewiuu');

//superReducedString('baab'); //''
