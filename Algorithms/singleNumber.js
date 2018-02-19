/*Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?*/

var singleNumber = function(nums) {
    if(nums.length == 0) return 
    if(nums.length == 1) return nums[0]
    nums.sort((a,b)=>{
        return a - b
    })
    var output = nums[0]
    for(var i = 1; i < nums.length; i++){
        output = output ^ nums[i]
    }
    return output
};

