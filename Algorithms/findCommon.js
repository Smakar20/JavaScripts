/*With two arrays A and B that each contain 8 bit integers, find the common elements between them.*/

function findCommon(arr1,arr2){
  sortArr(arr1)
  sortArr(arr2)
  var i = 0, j = 0
  var common = []
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] == arr2[j]){
      common.push(arr1[i])
      i++
      j++
    }else if(arr1[i] < arr2[j]){
      i++
    }else{
      j++
    }
  }
  return common
}

function sortArr(arr){
  arr.sort((a,b)=>{
    return a - b
  })
}

//------ test -----------
findCommon([1, 2, 4, 8], [1, 8, 4, 9])
