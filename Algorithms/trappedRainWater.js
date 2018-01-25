/*Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap 
after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
*/

var trap = function(height) {
    if(height.length == 0) return 0
    var len = height.length
    var left = [], right = []
    left[0] = height[0]
    right[len-1] = height[len-1]
    for(var i = 1; i < len; i++){
        left[i] = Math.max(left[i-1], height[i])
    }
    
    for(var i = len-2; i >= 0; i--){
        right[i] = Math.max(right[i+1], height[i])
    }
    
    var water = 0
    for(var i = 0; i < len; i++){
        water += Math.min(left[i],right[i]) - height[i]
    }
    return water
}

trap([0,1,0,2,1,0,1,3,2,1,2,1]) //6
