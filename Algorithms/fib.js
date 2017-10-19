/*Write a function fib() that a takes an integer num and returns the nth Fibonacci number.*/

(function fib(num){
  var secLast = 0
  var last = 0, sum = 0
  for(var i = 1; i <= num; i++){
    if(i == 1){
      last = 1
      continue
    }
    var sum = last + secLast
    secLast = last
    last = sum
  }
  return last
})(6) //8
