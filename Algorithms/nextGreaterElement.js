/*Given an array, print the Next Greater Element (NGE) for every element. The Next greater Element for an element x is the first greater 
element on the right side of x in array. Elements for which no greater element exist, consider next greater element as -1.

Examples:
a) For any array, rightmost element always has next greater element as -1.
b) For an array which is sorted in decreasing order, all elements have next greater element as -1.
c) For the input array [4, 5, 2, 25], the next greater elements for each element are as follows.

Element       NGE
   4      -->   5
   5      -->   25
   2      -->   25
   25     -->   -1
d) For the input array [13, 7, 6, 12], the next greater elements for each element are as follows.

  Element        NGE
   13      -->    -1
   7       -->     12
   6       -->     12
   12     -->     -1
   */
   
function nextGreaterElement(arr){
 var output = []
 for(var i = 0; i < arr.length; i++){
   for(var j = i + 1; j < arr.length; j++){
     if(arr[j] > arr[i]){
       output.push(arr[j])
       break
     }
     
     if(j == arr.length - 1) output.push(-1)
   }
   if(i == arr.length - 1) output.push(-1)
 }
 return output
}
   
//-------test--------
//nextGreaterElement([13, 7, 6, 12]) //[-1,12,12,-1]
nextGreaterElement([4, 5, 2, 25]) //[5,25,25,-1]
   
