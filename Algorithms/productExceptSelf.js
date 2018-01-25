/*Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements 
of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].
*/

var productExceptSelf = function(nums) {
    var multArr = [], prod = 1
    var len = nums.length
    for(var i = 0; i < len; i++){
        multArr[i] = prod
        prod *= nums[i]
    }
    
    prod = 1
    for(var i = len-1; i >= 0; i--){
      multArr[i] = multArr[i] * prod
      prod *= nums[i]
    }
    return multArr
}

productExceptSelf([1,0]) //[0,1]
