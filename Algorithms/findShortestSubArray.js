
/*Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its 
elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6
Note:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.*/

var findShortestSubArray = function(nums) {
  // map of element -> (minIdx, maxIdx, count)
  var m = new Map()
  nums.forEach((val, idx) => {
    var indices = m.get(val) || {minIdx: idx, maxIdx:idx, count:0}
    indices.maxIdx = idx
    indices.count += 1
    m.set(val, indices)
  })
  

  // find the max ( maxIdx - minIdx) 
  var maxCount = 0
  var minLen = nums.length
  var output = null
  m.forEach((indices, val) => {
    if (indices.count > maxCount) {
      maxCount = indices.count
      output = indices
      minLen = indices.maxIdx - indices.minIdx + 1
    } 
    else if (indices.count == maxCount) {
      if (indices.maxIdx - indices.minIdx + 1 < minLen) {
        minLen = indices.maxIdx - indices.minIdx + 1
        output = indices
      }
    }
  })
  
  return output.maxIdx - output.minIdx + 1
 }
 
 
 
 findShortestSubArray([1,2,2,3,1,4,2]) //6
