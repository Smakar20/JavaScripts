/*Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave 
beyond the new length.
*/

var removeDuplicates = function(nums) {
  //var readIdx = 0
  var writeIdx = 0
  for (var readIdx = 0; readIdx < nums.length; ++readIdx) {
    if (writeIdx < 2 || nums[readIdx] > nums[writeIdx-2]) {
      nums[writeIdx] = nums[readIdx]
      writeIdx++
    }
  }  
  return writeIdx
}

removeDuplicates([1,1,1,2,2,3]) //5
