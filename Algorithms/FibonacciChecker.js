/*Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. 
This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two 
numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no. */

(function FibonacciChecker(num) { 
    var arr = [0,1]
    var found = false
    while(!found){
        if(arr[arr.length-1] < num){
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }else{
            found = true
        }
    }
    return (arr[arr.length - 1] == num) ? 'yes' : 'no'
}(8)) //'yes'
