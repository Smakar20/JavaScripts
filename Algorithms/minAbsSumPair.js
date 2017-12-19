/*An Array of integers is given, both +ve and -ve. You need to find the two elements such that their sum is closest to zero.*/

arr = [1, 60, -10, 70, -80, 85]

function minAbsSumPair(arr){
  var ele1 = null, ele2 = null
  var absSum = arr[0] + arr[1]
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      if(Math.abs(absSum) > Math.abs(arr[i] + arr[j])){
         absSum = arr[i] + arr[j]
         ele1 = arr[i]
         ele2 = arr[j]
      }
    }
  }
  return `${ele1}, ${ele2}`
}

minAbsSumPair(arr) // -80, 85
