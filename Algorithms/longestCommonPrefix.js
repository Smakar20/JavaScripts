/*Write a function to find the longest common prefix string amongst an array of strings.*/

 //----- better approach ------
 var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return ''
    strs.sort((a,b)=>{
        return a.length - b.length
    })
    
    var common = strs[0]
    for(var i = 1; i < strs.length; i++){
        common = prefixSearch(common, strs[i])
        if(common == '') return ''
    }
    return common
};


function prefixSearch(word, str){
    var output = ''
    for(var i = 0; i < word.length; i++){
      if(word[i] != str[i]) break
      output += word[i]
    }
    return output
}

//------------- test --------------
console.log('better way: ',longestCommonPrefix(["apple", "ape", "april"])) //'ap'

//------ alternate method ------------
function longestCommon(arr){
  if(arr.length == 0) return ''
    arr.sort((a,b)=>{
        return a.length - b.length
    })

    var common = ''
    var found = false, remove = 0
    while(!found){
        var word = arr[0]
        common = word.slice(0,word.length-remove)
        
        for(var i = 1; i < arr.length; i++){
            if(arr[i].indexOf(common) == -1) break
            if(i == arr.length - 1) found = true
        }
        remove++
    }
    return common
}

//------------- test --------------
console.log('alternate: ',longestCommon(["apple", "ape", "april"])) //'ap'
