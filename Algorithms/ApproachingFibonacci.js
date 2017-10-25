/*Have the function ApproachingFibonacci(arr) take the arr parameter being passed which will be an array of integers and 
determine the smallest positive integer (including zero) that can be added to the array to make the sum of all of the numbers 
in the array add up to the next closest Fibonacci number. For example: if arr is [15, 1, 3], then your program should output 2 
because if you add up 15 + 1 + 3 + 2 you get 21 which is the closest Fibonacci number. */

(function ApproachingFibonacci(arr) { 
    var total = arr.reduce((n1,n2)=>{
        return n1 + n2
    },0)
    
  var secLast = 0
  var last = 0, sum = 0
  for(var i = 1; i <= total; i++){
    if(i == 1){
      last = 1
    }
    else{
        var sum = last + secLast
        secLast = last
        last = sum
    }
    if(last == total) return 0
    if(last > total) return last - total
  }
})([1,0]) //0
