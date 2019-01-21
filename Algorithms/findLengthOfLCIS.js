/* Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

Example 1:
Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
Example 2:
Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length === 1) return 1;
    var maxLen = 0;
    var curLen = 1;
    for (var i = 1; i < nums.length; i++){
        if (nums[i] > nums[i-1]) {
            curLen += 1;
        } else {
          curLen = 1;
        }
        maxLen = (maxLen < curLen) ? curLen : maxLen;
    }
    return maxLen;
};

 findLengthOfLCIS([1,3,5,4,7]); // 3 -- [1,3,5]
// findLengthOfLCIS([2,2,2,2,2]); // 1 -- [2]
