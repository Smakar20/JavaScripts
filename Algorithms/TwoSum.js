/*Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11 

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
}([7, 3, 5, 2, -4, 8, 11]))
