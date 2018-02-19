/*Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole 
array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
*/

var findUnsortedSubarray = function(nums) {
    var n = nums.length, 
        start = -1, 
        end = -2, 
        min = nums[n-1], 
        max = nums[0]
    for (var i=1;i<n;i++) {
      max = Math.max(max, nums[i])
      min = Math.min(min, nums[n-1-i])
      if (nums[i] < max) end = i
      if (nums[n-1-i] > min) start = n-1-i 
    }
    return end - start + 1
};

findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]) //5
