/*There are 2 sorted arrays A and B. Write an algorithm to find the median of the array obtained after merging the above 2 arrays.*/

function findMedian(arr1, arr2){
  var median = Math.round((arr1.length + arr2.length)/2)
  var len = arr1.length + arr2.length,
  findMed = null
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      findMed = j
      if(arr1[i] < arr2[j]){
        arr2.splice(j,0,arr1[i])
        break
      }
      if(j == arr2.length - 1){
        arr2.push(arr1[i])
        break
      }
    }
    if(findMed >= median){
      return (len%2 == 0) ? (arr2[median] + arr2[median - 1])/2 : arr2[median-1]
    }
  }
}

findMedian([1, 12, 15, 26, 34], [2, 13, 17, 30, 45]) //16

