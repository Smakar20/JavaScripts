/*Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) 
in the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two 
pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs.
If there are no two numbers that sum to the first element in the array, return -1 */

function TwoSum(arr){
  var num = arr[0]
  var elements = sort(arr.slice(1))
  
  var output = [],
  objMap = {}
  for(var i = 0; i < elements.length; i++){
    var diff = num - elements[i]
    var currentArr = sort([elements[i],diff])
    if(binarySearch(elements,diff,i+1,elements.length-1) && objMap[currentArr] == undefined){
      output.push([elements[i],diff])
      objMap[currentArr] = true
    }
  }
  return (output.length == 0) ? -1 : output
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

//--------- test -----------
TwoSum([7, 3, 5, 2, -4, 8, 11]) // [ [ -4, 11 ], [ 2, 5 ] ] --> time complexity O(n log n)

//----- another method ----------
function TwoSum(arr){
  var num = arr[0]
  var output = [],
  objMap = {},
  eleObj = {}
  for(var i = 1; i < arr.length; i++){
    if(eleObj[arr[i]] != undefined){
    if(objMap[sort([eleObj[arr[i]], arr[i]])] == undefined) output.push([eleObj[arr[i]], arr[i]])
    }else{
      eleObj[num - arr[i]] = arr[i]
    }
  }
  return output
}

//------------------------------------------------------------------------------------------

/*Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) in
the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs 
that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order 
the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11 

If there are no two numbers that sum to the first element in the array, return -1 */

(function TwoSum(arr) { 
    let total = arr[0],
    obj = {},
    opArr = []
    
    for(let i = 1; i < arr.length; i++){
        let diff = total - arr[i]
        if(arr.lastIndexOf(diff) == i) break
        if(arr.indexOf(diff) != -1 && !(opArr.includes(arr[i]+ ',' + diff) || opArr.includes(diff + ',' + arr[i]))){
          console.log("arr: ",opArr)
            opArr.push(arr[i]+ ',' + diff)
        }
    }
    return (opArr.length != 0) ? opArr.join(" ") : -1
}([7, 3, 5, 2, -4, 8, 11])) // '5,2 -4,11' --> time complexity O(n^2)
