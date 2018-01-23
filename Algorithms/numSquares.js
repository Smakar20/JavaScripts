/*Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.*/

function numSquares(n){
  var arr = [0]
  for(var i = 1; i <= n; i++){
    var output = closestPerfectSquare(i)
    var min = n
    for(var j = 1; j <= output; j++){
      min = (min > arr[i - j*j]+1) ? arr[i - j*j]+1 : min
    }
    arr[i] = min
  }
  return arr[n]
}


function closestPerfectSquare(n){ 
   return (Math.floor((Math.sqrt(n))))
}

//------ test --------
numSquares(14) // 9 + 4 + 1
