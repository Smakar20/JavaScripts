/*Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and 
each combination should be a unique set of numbers.

Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]

Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]
*/

var combinationSum3 = function(k, n) {
    var nums = [1,2,3,4,5,6,7,8,9]
    var output = {}
    findCombinations(nums, 0, 0, n, k, output, [])
    return Object.values(output)
};

function findCombinations(nums, start, curSum, total, eleLen, output, current){
    if(total == curSum && current.length == eleLen && output[JSON.stringify(current)] == undefined){
        output[JSON.stringify(current)] = current.slice()
        return
    }
    
    if(curSum > total) return
    
    for(var i = start; i < nums.length; i++){
        current.push(nums[i])
        findCombinations(nums, i+1, curSum + nums[i], total, eleLen, output, current)
        current.pop()
    }
}

//combinationSum3(3,7) //[[1,2,4]]
combinationSum3(3,9) //[[1,2,6], [1,3,5], [2,3,4]]
