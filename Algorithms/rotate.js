
/*Rotate a given array for a number of times, one by one without using any other array. 
*/

function rotate(arr, n){
  var d = 0
  while(d < n){
    var start = arr[0]
    for(var i = 0; i < arr.length-1; i++){
      arr[i] = arr[i+1]
    }
    arr[i] = start
    d++
  }
  return arr
}

rotate([1, 2, 3, 4, 5, 6, 7], 2) //[3, 4, 5, 6, 7, 1, 2]
