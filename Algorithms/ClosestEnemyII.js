/*Have the function ClosestEnemyII(strArr) read the matrix of numbers stored in strArr which will be a 2D matrix that contains only the 
integers 1, 0, or 2. Then from the position in the matrix where a 1 is, return the number of spaces either left, right, down, or up you 
must move to reach an enemy which is represented by a 2. You are able to wrap around one side of the matrix to the other as well. For 
example: if strArr is ["0000", "1000", "0002", "0002"] then this looks like the following: 

0 0 0 0
1 0 0 0
0 0 0 2
0 0 0 2 

For this input your program should return 2 because the closest enemy (2) is 2 spaces away from the 1 by moving left to wrap to the other 
side and then moving down once. The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as
well, where in that case your program should return a 0. 
*/

var min=100000
function ClosestEnemyII(strArr) {
  var one = findNum(strArr, 1)[0]
  if(one == undefined) return 0
  var twos = findNum(strArr, 2)
  if (twos.length == 0) return 0
  
  // Calculate distance from 1 to each of 2s and return min of that
  var min = 1000000
  for(var two of twos) {
    min = Math.min(min, calculateBestDistance(one, two, strArr.length))
  }
  
  return min
}

function findNum(arr, num){
    var output = []
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(arr[i][j] == num) {
              output.push({'i': i, 'j': j})
            }
        }
    }
    return output
}

function calculateBestDistance(one, two, matrixLength) {
  var distanceNoWrapping = Math.abs(one.i - two.i) + Math.abs(one.j - two.j)
  var distanceIWrapping = ((one.i < two.i) ? (one.i + matrixLength - two.i) : (two.i + matrixLength - one.i)) + Math.abs(one.j - two.j)
  var distanceJWrapping = ((one.j < two.j) ? (one.j + matrixLength - two.j) : (two.j + matrixLength - one.j)) + Math.abs(one.i - two.i)
  var distanceIJWrapping = ((one.i < two.i) ? (one.i + matrixLength - two.i) : (two.i + matrixLength - one.i)) + ((one.j < two.j) ? (one.j + matrixLength - two.j) : (two.j + matrixLength - one.j))
  
  return Math.min(distanceNoWrapping, distanceIWrapping, distanceJWrapping, distanceIJWrapping)

}

//----- test -------
//ClosestEnemyII(["000", "100", "200"]) // 1
//ClosestEnemyII(["0000", "1000", "0002", "0002"]) //2
ClosestEnemyII(["0000000", "0001000", "0000000", "0000000", "0000000",  "2000000", "0000000"])
