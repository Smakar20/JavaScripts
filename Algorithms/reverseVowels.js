/*Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
 */
 
 
var reverseVowels = function(s) {
    var vowels = {'a': true,
                 'e': true,
                 'i': true,
                 'o': true,
                 'u': true}
    var vowelIdx = [],
        vowelArr = []
    for(var i = 0; i < s.length; i++){
        if(vowels[s[i].toLowerCase()] != undefined){
            vowelIdx.push(i)
            vowelArr.push(s[i])
        }
    }
    vowelArr.reverse()
    var arr = s.split('')
    for(var i = 0; i < vowelArr.length; i++){
        arr[vowelIdx[i]] = vowelArr[i]
    }
    return arr.join('')
};

reverseVowels('aA') //'Aa'
