/*Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every 
element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could
search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

Example 1:
Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number; 
The second 1's next greater number needs to search circularly, which is also 2.
Note: The length of given array won't exceed 10000.*/

function nextGreaterElements(nums) {
    if(nums.length > 10000) return
    var output = []
    for(var i = 0; i < nums.length; i++){
        var k, l, foundGreater = false
        for(var j = i+1; j < nums.length; j++){
            k = j
            if(nums[j] > nums[i]){
                output.push(nums[j])
                foundGreater = true
                break
            }
        }
        
        if(!foundGreater){
          for(var j = 0; j < i; j++){
              l = j
              if(nums[j] > nums[i]){
                  output.push(nums[j])
                  foundGreater = true
                  break
              }
          }
        }
        
        if(((i== 0 || i == nums.length - 1) || (k == (nums.length - 1) && l == i-1)) && !foundGreater) output.push(-1)
    }
    return output
}
//---------test---------
nextGreaterElements([1,5,3,6,8]) //[5,6,6,8,-1]
