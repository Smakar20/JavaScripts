/*Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 */
 
var frequencySort = function(s) {
    if(s == '' || s == null) return ''
    if(s.length == 1) return s
    var obj = {}
    for(var i = 0; i < s.length; i++){
        if(obj[s[i]] != undefined){
            obj[s[i]]['count'] += 1
            obj[s[i]]['str'] += s[i]
        }else{
            obj[s[i]] = {}
            obj[s[i]]['count'] = 1
            obj[s[i]]['str'] = s[i]
        }
    }
    
    var arr = []
    for(var o of Object.keys(obj)){
        arr.push([obj[o].str,obj[o].count])
    }
    
    arr.sort((a,b)=>{
      return a[1] - b[1]
    }).reverse()
    
    var output = ''
    for(var a of arr){
      output += a[0]
    }
    return output
};


frequencySort('Aabb') // 'bbaA'
