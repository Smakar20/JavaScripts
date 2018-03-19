/*Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.*/

var groupAnagrams = function(strs) {
    var anagramObj = {}
    for(var s of strs){
        if(anagramObj[JSON.stringify(s.split('').sort())] == undefined){
            anagramObj[JSON.stringify(s.split('').sort())] = [s]
        }else{
            anagramObj[JSON.stringify(s.split('').sort())].push(s)
        }
    }
    return Object.values(anagramObj)
};


groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])  /* [
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]*/
