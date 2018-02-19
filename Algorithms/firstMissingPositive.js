/*Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.
*/

var firstMissingPositive = function(nums) {
    if(nums.length == 0) return 1
    if(nums.length == 1) return ((nums[0] <= 0 || nums[0] != 1) ? 1 : nums[0]+1)
    var i = 0
    while(i < nums.length){
        if(nums[i] == i+1 || nums[i] <= 0 || nums[i] > nums.length){
            i++
        }else if(nums[nums[i]-1] != nums[i]){
            swap(nums, i, nums[i]-1)
        }else{
            i++
        } 
    }
    var i = 0
    while(i < nums.length && nums[i] == i + 1) i++
    return i+1
};

function swap(arr, i, j){
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

firstMissingPositive([0,2,2,1,1]) // 3
