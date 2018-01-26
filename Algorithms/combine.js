/*Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

var combine = function(n, k) {
    var output = {}
    combinatios(buildArr(n), 0, output, [], k)
    return Object.values(output)
};

function buildArr(n){
    var arr = []
    for(var i = 1; i <= n; i++){
        arr.push(i)
    }
    return arr
}

function combinatios(nums, start, output, current, len){
    if(current.length == len && output[JSON.stringify(current)] == undefined){
       output[JSON.stringify(current)] = current.slice()
        return
    }
    
    if(current.length > len) return
    
    for(var i= start; i<nums.length; i++){
        current.push(nums[i])
       combinatios(nums, i+1, output, current, len) 
        current.pop()
    }
}


combine(4,2)
/*[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]*/
