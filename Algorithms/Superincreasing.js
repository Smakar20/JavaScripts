/*Have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing 
sequence where each element in the array is greater than the sum of all previous elements. The array will only consist of positive 
integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing 
sequence. If a superincreasing sequence isn't formed, then your program should return the string "false" */

(function Superincreasing(arr) { 
    let sum = 0
    for(var i = 0; i < arr.length; i++){
        if(i != 0 && arr[i] <= sum){
            return "false"
        }
        sum += arr[i]
    }
    return "true"
}([1,2,3,100])) //"true"
