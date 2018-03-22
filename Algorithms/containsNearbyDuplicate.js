/*Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that 
nums[i] = nums[j] and the absolute difference between i and j is at most k.
 */
 
var containsNearbyDuplicate = function(nums, k) {
    var numMap = new Map()
    for(var i = 0; i < nums.length; i++){
        if(!numMap.has(nums[i])){
            numMap.set(nums[i],i)
        }else{
            if(Math.abs(numMap.get(nums[i]) - i) <= k) return true
            numMap.set(nums[i],i)
        }
    }
    return false
};

containsNearbyDuplicate([99,99],2) //true
