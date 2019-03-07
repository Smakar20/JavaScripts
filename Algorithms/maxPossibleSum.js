// Given an array, find the maximum possible sum formed by elements in the array.
// [-2, -3, 4, -1, -2, 1, 5, -3] => 4 + 1 + 5 = 10


function maxPossibleSum(arr){
  var maxSum = 0;
  var curSum = 0;
  /*var numArr = arr.sort((a,b)=> {
    return b - a;
  });
  
  curSum = numArr[0];
  for (var i = 1; i < numArr.length; i++){
    if (curSum + numArr[i] > curSum){
      curSum += numArr[i];
    }
  }*/
  
  curSum = arr[0];
  var idx = 0;
  for (var i = 1; i < arr.length; i++){
    if (arr[i] > curSum){
      curSum = arr[i]
      idx = i;
    }
  }

  for(var i = 0; i < arr.length; i++){
    
    if (i === idx) continue;
   if (curSum + arr[i] > curSum){
      curSum += arr[i];
    }  
  }
  return curSum;
}

console.log(maxPossibleSum([-2, -3, 4, -1, -2, 1, 5, -3])); // 10
