
/*remove duplicates in-place.*/
var removeDuplicates = function(nums) {
    for(var i = 1; i < nums.length; i++){
       if(nums[i] == nums[i-1])
       {
           nums.splice(i-1,1)
           i = -1
       }
    }
    return nums
};

removeDuplicates([1,1,1,1,2,3,3,4]) // [1,2,3,4]
