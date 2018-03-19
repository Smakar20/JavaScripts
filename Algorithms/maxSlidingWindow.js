/*Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
You can only see the k numbers in the window. Each time the sliding window moves right by one position.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Therefore, return the max sliding window as [3,3,5,5,6,7].

Note: 
You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.*/

var maxSlidingWindow = function(nums, k) {
    if(nums.length == 0) return []
    var max, output = []
    for(var i = 0; i <= nums.length - k; i++){
        max = nums[i]
        for(var j = 1; j < k; j++){
            if(nums[i+j] > max) max = nums[i+j]
        }
        output.push(max)
    }
    return output
}

//alternate method:
function maxSliding(nums,k){
    var output = []
    for(var i = 0; i <= nums.length-k; i++){
        output.push(findMax(nums.slice(i,i+k)))
    }
    return output
}

function findMax(arr){
    return Math.max.apply(null,arr)
}
