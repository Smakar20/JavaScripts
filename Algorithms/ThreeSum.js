/*Have the function ThreeSum(arr) take the array of integers stored in arr, and determine if any three distinct numbers (excluding the 
first element) in the array can sum up to the first element in the array. For example: if arr is [8, 2, 1, 4, 10, 5, -1, -1] then there 
are actually three sets of triplets that sum to the number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1]. Your program should return the 
string true if 3 distinct elements sum to the first element, otherwise your program should return the string false. The input array will 
always contain at least 4 elements.*/

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
