/*Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // store the result that is the max we have found so far
    var r = nums[0]

    // imax/imin stores the max/min product of
    // subarray that ends with the current number A[i]
    for (var i = 1, imax = r, imin = r; i < nums.length; i++) {
        // multiplied by a negative makes big number smaller, small number bigger
        // so we redefine the extremums by swapping them
        if (nums[i] < 0){
            var temp = imax
            imax = imin
            imin = temp
        }

        // max/min product for the current number is either the current number itself
        // or the max/min by the previous number times the current one
        imax = Math.max(nums[i], imax * nums[i])
        imin = Math.min(nums[i], imin * nums[i])

        // the newly computed max value is a candidate for our global result
        r = Math.max(r, imax)
    }
    return r
};

maxProduct([2,3,-2,4]) //6
