/*Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.


Follow up:
Could you solve it using only O(1) extra space?


Example 1:
Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
Example 2:
Input:
["a"]

Output:
Return 1, and the first 1 characters of the input array should be: ["a"]

Explanation:
Nothing is replaced.
Example 3:
Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.*/

var compress = function(chars) {
    var slowIdx = 0
    var count = 1
    for(var i = 1; i <= chars.length; i++){
        if(chars[i] == chars[i-1]){
            count++
            continue
        }
        chars[slowIdx] = chars[i-1]
         if(count > 1){
             var str = String(count)
             for(var j = 0; j < str.length; j++){
                slowIdx++
                chars[slowIdx] = str[j]
             }
         }
        slowIdx++
        count = 1
    }
    chars.splice(slowIdx, chars.length)
    return chars.length
};

//--------- test ----------
var arr = ["a","a","b","b","c","c","c"]
compress(arr) //6

