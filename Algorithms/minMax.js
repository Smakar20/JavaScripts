/*Write a function to return minimum and maximum in an array. You program should make minimum number of comparisons.*/

function minMax(arr){
  if(arr.length == 0) return 'can not find'
  var min = arr[0], max = arr[0]
  for(var i = 1; i < arr.length; i++){
    if(arr[i] <= min){
      min = arr[i]
    }else if(arr[i] > max){
      max = arr[i]
    }
  }
  return `{ min: ${min}, max: ${max} }`
}
//---------- test ---------------
console.log('First method: ', minMax([1000, 11, 445, 1, 330, 3000])) //'{ min: 1, max: 3000 }'

//alternate method:
function maxMin(arr, arrMinLen, arrMaxLen){
  if(arrMaxLen == 0) return 'can not find'
  var minMax = {}, firstHalfArrPt = null, secondHalfArrPt = null
  if(arrMinLen == arrMaxLen){
    minMax.min = arr[arrMinLen]
    minMax.max = arr[arrMinLen]
    return minMax
  }
  
  if(arrMaxLen == arrMinLen + 1){
    if(arr[arrMinLen] > arr[arrMaxLen]){
      minMax.min = arr[arrMaxLen]
      minMax.max = arr[arrMinLen]
    }else{
      minMax.min = arr[arrMinLen]
      minMax.max = arr[arrMaxLen]
    }
    return minMax
  }
  var mid = Math.round((arrMaxLen + arrMinLen)/2)
  firstHalfArrPt = maxMin(arr,arrMinLen,mid)
  secondHalfArrPt = maxMin(arr,mid+1,arrMaxLen)
  minMax.min = (firstHalfArrPt.min < secondHalfArrPt.min) ? firstHalfArrPt.min : secondHalfArrPt.min
  minMax.max = (firstHalfArrPt.max > secondHalfArrPt.max) ? firstHalfArrPt.max : secondHalfArrPt.max
  
  return minMax
}
//----------- test ------------
console.log('Second method: ', maxMin([1000, 11, 445, 1, 330, 3000],0,5)) //{ min: 1, max: 3000 }
