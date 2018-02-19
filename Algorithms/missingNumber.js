/*Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1

Input: [3,0,1]
Output: 2
Example 2

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?*/

var missingNumber = function(nums) {
    if(nums.length == 0) return 1
    if(nums.length == 1) return (nums[0] == 0 || nums[0] > 1) ? 1 : 0
    nums.sort((a,b)=>{
        return a - b
    })
    var found = false
    for(var i = 0; i < nums.length; i++){
        if(nums[i] == 0) found = true
        if(!found) return 0
        if(nums[i+1] && (nums[i] + 1 != nums[i+1])) return nums[i] + 1
    }
    return nums[nums.length - 1] + 1
};

missingNumber([3,0,1]) //2
