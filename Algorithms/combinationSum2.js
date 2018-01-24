/*Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums 
to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, 
A solution set is: 
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
*/

var combinationSum2 = function(candidates, target) {
   var sortedCandidates = candidates.sort((a,b)=>{
       return a-b
   })
   var output = []
   combinationSumUtil(sortedCandidates, target, 0, output, [], 0)
   return output
}

function combinationSumUtil(candidates, target, total, output, current, start){
  if(target == total){
    output.push(current.slice())
    return
  }
  if(total > target){
    return
  }
  
  for(var i = start; i < candidates.length; i++){
    if(i > start && candidates[i] == candidates[i-1]) continue
    current.push(candidates[i])
    //total += candidates[i]
    combinationSumUtil(candidates, target, total + candidates[i], output, current, i+1)
    current.pop()
    //total -= candidates[i]
  }
}

//-------- test -----------
combinationSum2([1], 2) // []
//combinationSum2([10,1,2,7,6,1,5],8) //[[1,1,6],[1,2,5],[1,7],[2,6]]

//combinationSum2([26,28,10,22,20,10,17,16,12,11,12,17,27,21,15,7,27,30,33,18,6,22,17,5,30,15,22,28,19,22,19,11,16,25,28,31,22,32,12,29,30,12,34,15,28,14,17,21,31,8,26],29)

