/*Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
 */
var findDisappearedNumbers = function(nums) {
    nums.sort((a,b)=>{
        return a - b
    })
    
    var current = 0
    var output = []
    for(var i = 0; i < nums.length; i++){
        if(nums[i] == current) continue
        if(nums[i] != current + 1){
            current += 1
           while(current < nums[i]){
               output.push(current)
               current += 1
           } 
        }else{
            current = nums[i]
        }
    }
    
    while(current < nums.length){
      current += 1
      output.push(current)
    }
    return output
};

findDisappearedNumbers([2,2]) // [1]
