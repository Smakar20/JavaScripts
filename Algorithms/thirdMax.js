/*Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The 
time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.*/

var thirdMax = function(nums) {
    var numObj = {}
    for(var n of nums){
        numObj[n] = n
    }
    
    if(Object.keys(numObj).length <= 2) return findMax(Object.keys(numObj))
    var i = 0
    while(i < 2){
        var max = findMax(Object.keys(numObj))
        delete numObj[max]
        i++
    }
    return findMax(Object.keys(numObj))
    
};

function findMax(arr){
    return Math.max.apply(null,arr)
}

thirdMax([2, 2, 3, 1]) //1
