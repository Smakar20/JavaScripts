/*Replace elements of an array with nearest bigger number at right side of the arr in O(n).*/

function nextLargest(arr){
  var stack = [], largest
  for(var i = arr.length - 1; i >= 0; i--){
    if(i == arr.length - 1){
      stack.push(arr[i])
      largest = arr[i]
      //arr[i] = -1 //nothing can be found right of the last element, so replace it with -1 
      continue
    }
    
    if(arr[i] < largest){
      stack.push(arr[i])
      var current = arr[i]
      arr[i] = largest
      largest = current
    }else{
      while(stack.length != 0){
        if(arr[i] < stack[stack.length - 1]){
          var current = arr[i]
          arr[i] = stack[stack.length - 1]
          stack.push(current)
          break
        }
        
        largest = arr[i]
        stack.pop()
        
        if(stack.length == 0){
          stack.push(arr[i])
          //arr[i] = -1 // incase nothing at the right is greater than the current element
          break
        }
      }
    }
  }
  return arr
}

//------- test ----------
var arr = [1,3,2,7,5,13,9,11]
//nextLargest(arr) //[ 3, 7, 7, 13, 13, 13, 11, 11 ]
nextLargest([7,5,6,3,4,1,2,9,11]) // [ 9, 6, 9, 4, 9, 2, 9, 11, 11 ]


//------ another method -----------

function findNextLargest(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      if(arr[j] > arr[i]){
        arr[i] = arr[j]
        break
      }
      //if(j == arr.length - 1) arr[i] = -1 //incase no greater element is found @right
    }
  }
  return arr
}

//findNextLargest([7,5,6,3,4,1,2,9,11]) //[ 9, 6, 9, 4, 9, 2, 9, 11, 11 ]

//------------------------------------------------------------------------
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
   
