/*Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.*/

var maxSubArray = function(nums) {
    var maxSum = nums[0], current = nums[0]
    for(var i = 1; i < nums.length; i++){
        current = Math.max(current + nums[i], nums[i])
        maxSum = Math.max(maxSum, current)
    }
    return maxSum
}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) //6
