/*Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the 
array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

function threeSum(arr){
  if(arr.length < 3) return []
  var currArr = sort(arr)
  var output = [],
  objMap = {}
  for(var i = 0; i < currArr.length; i++){
    var num = (currArr[i] == 0) ? 0 : -currArr[i]
    for(var j = i+1; j < currArr.length; j++){
      var diff = num - currArr[j]
      var currentArr = sort([currArr[j],diff,currArr[i]])
      if(binarySearch(currArr,diff,j+1,currArr.length-1) && objMap[currentArr] == undefined){
        output.push(currentArr)
        objMap[currentArr] = true
      }
    }
  }
  return output
}

function sort(arr){
  return arr.sort((a,b)=>{
    return a-b
  })
}

function binarySearch(arr, num, start, end){
    if(arr.length == 0 || (arr.length == 1 && arr[0] != num) || (start > end)) return false
    var mid = parseInt((start+end)/2)
    if(num == arr[mid]){
      return true
    }else if(num > arr[mid]){
       return binarySearch(arr,num, mid+1,end)
    }else if(num < arr[mid]){
      return binarySearch(arr,num, start, mid-1)
    }
}

//-----------test--------------
/*threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]) /*[ [ -4, 1, 3 ],[ -4, 4, 0 ],[ -2, 1, 1 ],[ -2, 4, -2 ],[ 1, -5, 4 ],
   [ 0, 0, 0 ] ]*/
  
threeSum([-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,
          -7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,
          -5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1])

/*[[-15,1,14],[-15,2,13],[-15,3,12],[-15,4,11],[-15,5,10],[-15,6,9],[-15,7,8],[-14,0,14],[-14,1,13],[-14,2,12],[-14,3,11],
[-14,4,10],[-14,5,9],[-14,6,8],[-14,7,7],[-13,-1,14],[-13,0,13],[-13,1,12],[-13,2,11],[-13,3,10],[-13,4,9],[-13,5,8],[-13,6,7],
    [-12,-2,14],[-12,-1,13],[-12,0,12],[-12,1,11],[-12,2,10],[-12,3,9],[-12,4,8],[-12,5,7],[-11,-3,14],[-11,-2,13],[-11,-1,12],
    [-11,0,11],[-11,1,10],[-11,2,9],[-11,3,8],[-11,4,7],[-11,5,6],[-10,-4,14],[-10,-3,13],[-10,-2,12],[-10,-1,11],[-10,0,10],
    [-10,1,9],[-10,2,8],[-10,3,7],[-10,4,6],[-10,5,5],[-9,-5,14],[-9,-4,13],[-9,-3,12],[-9,-2,11],[-9,-1,10],[-9,0,9],[-9,1,8],
    [-9,2,7],[-9,3,6],[-9,4,5],[-8,-6,14],[-8,-5,13],[-8,-4,12],[-8,-3,11],[-8,-2,10],[-8,-1,9],[-8,0,8],[-8,1,7],[-8,2,6],
    [-8,3,5],[-8,4,4],[-7,-7,14],[-7,-6,13],[-7,-5,12],[-7,-4,11],[-7,-3,10],[-7,-2,9],[-7,-1,8],[-7,0,7],[-7,1,6],[-7,2,5],
    [-7,3,4],[-6,-6,12],[-6,-5,11],[-6,-4,10],[-6,-3,9],[-6,-2,8],[-6,-1,7],[-6,0,6],[-6,1,5],[-6,2,4],[-6,3,3],[-5,-5,10],
    [-5,-4,9],[-5,-3,8],[-5,-2,7],[-5,-1,6],[-5,0,5],[-5,1,4],[-5,2,3],[-4,-4,8],[-4,-3,7],[-4,-2,6],[-4,-1,5],[-4,0,4],
    [-4,1,3],[-4,2,2],[-3,-3,6],[-3,-2,5],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-2,4],[-2,-1,3],[-2,0,2],[-2,1,1],[-1,-1,2],
    [-1,0,1]]*/


//---------alternate approach------------
function threeSum(arr){
  if(arr.length < 3) return []  
  var sortedArr = sort(arr)
  var output = {}
  for(var i = 0; i < sortedArr.length; i++){
    var target = 0 - sortedArr[i]
    //Optimization if the current num was same as the last one, we do not need.
    if (i == 0 || (i > 0 && sortedArr[i] != sortedArr[i-1])) {
      twoSums = twoSumInSortedArr(sortedArr, target, i+1, sortedArr.length-1)
      for (var j = 0; j < twoSums.length; j++) {
        twoSums[j].push(sortedArr[i])
        storeOutput(output, twoSums[j])
      }
    }
  }
  return Object.values(output)
}

function sort(arr){
  return arr.sort((a,b)=>{
    return a-b
  })
}

function twoSum(arr, target) {
  var sortedArr = sort(arr)
  return twoSumInSortedArr(sortedArr, target, 0, arr.length-1)
}

// twoSum in sorted array
function twoSumInSortedArr(arr, target, start, end) {
  var forward = start
  var reverse = end
  var output = {}
  
  while (forward < reverse) {
    sum = arr[forward] + arr[reverse]
    if (sum == target) {
      storeOutput(output, [arr[forward], arr[reverse]])
      //Optimizations if the current and the next num are same just skip them
      while(arr[forward] == arr[forward + 1]) forward++
      while(arr[reverse] == arr[reverse - 1]) reverse--
      forward++
      reverse--
    }
    else if (sum < target){
      forward++
    }
    else {
      reverse--
    }
  }
  
  return Object.values(output)
}

function storeOutput(output, candidate) {
  sortedCandidate = sort(candidate)
  if (output[sortedCandidate] == undefined) {
    output[sortedCandidate] = candidate
  }
}

//-------------------------------------------
/*Have the function ThreeSum(arr) take the array of integers stored in arr, and determine if any three distinct numbers 
(excluding the first element) in the array can sum up to the first element in the array. For example: if arr is 
[8, 2, 1, 4, 10, 5, -1, -1] then there are actually three sets of triplets that sum to the number 8: [2, 1, 5], [4, 5, -1] and 
[10, -1, -1]. Your program should return the string true if 3 distinct elements sum to the first element, otherwise your 
program should return the string false. The input array will always contain at least 4 elements.*/

function ThreeSum(arr) { 
    if(arr.length < 4) return 'not a valid input'
    var total = arr[0]
    for(var i = 1; i < arr.length-2; i++){
        for(var j = i+1; j < arr.length-1; j++){
            for(var k = j+1; k < arr.length; k++){
                if(arr[k] + arr[j] + arr[i] == total) return 'true'
            }
        }
    }
    return 'false'
}
