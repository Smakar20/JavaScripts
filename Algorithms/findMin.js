/*Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.
*/

var findMin = function(nums) {
   //handle the sorted Array
   if (nums[0] < nums[nums.length - 1]) {
     return nums[0]
   }
 
    return nums[findHead(nums, 0, nums.length - 1)]
};

function findHead(arr, start, end){
 if(start == end) return start
 var mid = parseInt((start+end)/2)
 if(arr[0] > arr[mid]){
   return findHead(arr, start, mid)
 }else{
   return findHead(arr, mid+1, end)
 }
}

findMin([1, 2]) //1
