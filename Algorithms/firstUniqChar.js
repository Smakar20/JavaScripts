/*Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

var firstUniqChar = function(s) {
  if(s == null || s == '') return -1
    var obj = {}
    obj[s[0]] = {'idx': 0, 'dup': false}
    for(var i = 1; i < s.length; i++){
        if(obj[s[i]] != undefined){
            obj[s[i]].dup = true
        }else{
            obj[s[i]] = {'idx': i, 'dup' : false}
        }
    }
    
   var idx = -1
   for(var o of Object.keys(obj)){
     if(obj[o].dup == true) continue
     if(idx == -1 || idx > obj[o].idx) idx = obj[o].idx
   }
    return idx
};


//firstUniqChar('') //-1
firstUniqChar('loveleetcode') //2
