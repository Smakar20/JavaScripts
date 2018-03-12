/*Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number 
must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.*/

var findDuplicate = function(nums) {
    var obj = {}
    for(var i = 0; i < nums.length; i++){
        if(obj[nums[i]] == undefined){
            obj[nums[i]] = true
        }else{
            return nums[i]
        }
    }
};

//alternate method with o(1) space complexity
/*First off, we can easily show that the constraints of the problem imply that a cycle must exist. Because each number in nums is between 
1 and n, it will necessarily point to an index that exists. Therefore, the list can be traversed infinitely, which implies that there is 
a cycle. Additionally, because 0 cannot appear as a value in nums, nums[0] cannot be part of the cycle. Therefore, traversing the array in
this manner from nums[0] is equivalent to traversing a cyclic linked list.*/

function findDuplicate(nums) {
    // Find the intersection point of the two runners.
    var tortoise = nums[0]
    var hare = nums[0]
    do{
      tortoise = nums[tortoise]
      hare = nums[nums[hare]]
    }while (tortoise != hare)

    // Find the "entrance" to the cycle.
    var ptr1 = nums[0]
    var ptr2 = tortoise
    while (ptr1 != ptr2) {
      ptr1 = nums[ptr1]
      ptr2 = nums[ptr2]
    }

    return ptr1
}

findDuplicate([1,1]) // 1
