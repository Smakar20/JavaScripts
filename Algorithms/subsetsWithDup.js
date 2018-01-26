/*Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

var subsetsWithDup = function(nums) {
    var output = {}
    combinatios(sort(nums), 0, output, [], nums.length)
    return Object.values(output)
};

function combinatios(nums, start, output, current, len){
    if(current.length <= len && output[JSON.stringify(sort(current))] == undefined){
      //console.log('current: ', current)
       output[JSON.stringify(sort(current))] = current.slice()
        //return
    }
    
    if(current.length > len) return
    for(var i = start; i<nums.length; i++){
        current.push(nums[i])
       combinatios(nums, i+1, output, current, len) 
        current.pop()
    }
}

function sort(arr){
  return arr.sort((a,b)=>{
    return a-b
  })
}

subsetsWithDup([4,4,4,1,4]) //[[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]
