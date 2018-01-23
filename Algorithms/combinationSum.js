/*Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where 
the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7, 
A solution set is: 
[
  [7],
  [2, 2, 3]
]
*/

var combinationSum = function(candidates, target) {
   var output = []
   combinationSumUtil(candidates, target, 0, output, [], 0)
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
  
  var i = 0
  for(var i = start; i < candidates.length; i++){
    current.push(candidates[i])
    total += candidates[i]
    combinationSumUtil(candidates, target, total, output, current, i)
    current.pop()
    total -= candidates[i]
  }
}

//------- test --------------
combinationSum([2, 3, 6, 7], 7) //[ [ 2, 2, 3 ], [ 7 ] ]
