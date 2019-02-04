/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

// O(n) solution
var searchRange = function(nums, target) {
    if (nums.length === 0 || target === null) return [-1, -1];
    var start = -1;
    var last = -1;
    for (var i = 0; i < nums.length; i++){
        if(nums[i] === target){
            start = i;
            break;
        }
    }

    if (start === -1) return [-1, -1];
    
    for (var i = nums.length - 1; i >=0; i--){
        if(nums[i] === target){
            last = i;
            break;
        }
    }
    
    return [start, last];
};

// O(log n) solution
var searchRange = function(nums, target) {
    if (nums.length === 0 || target === null) return [-1, -1];
    var start = -1;
    var last = -1;
    start = findElement(nums, 0, nums.length, target, true);
    
    if (start === nums.length || nums[start] !== target) return [-1, -1];
    
    last = findElement(nums, 0, nums.length, target, false) - 1;
    
    return [start, last];
};

function findElement(arr, start, end, num, left){
    while (start < end){
      var mid = parseInt((start + end)/2);
      if (arr[mid] > num || (left && arr[mid] === num)){
        end = mid;
      }
      else {
        start = mid + 1;
      }
    }
    return start;
  }
  
// ---------------------
searchRange([5,7,7,8,8,10], 8) //[3,4]
