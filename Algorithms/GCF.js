/*Have the function GCF(arr) take the array of numbers stored in arr which will always contain only two positive integers, 
and return the greatest common factor of them. For example: if arr is [45, 12] then your program should return 3. There will 
always be two elements in the array and they will be positive integers. */

function GCF(arr) {
    if(arr.length != 2) return 'not a valid input'
    var greatest = 0,
    num = arr.sort((a,b)=>{
        return a - b
    })[0]
    for(var i = 1; i <= num; i++){
        if(arr[0]%i == 0 && arr[1]%i == 0 && greatest < i) greatest = i
    }
    return greatest
    
}
