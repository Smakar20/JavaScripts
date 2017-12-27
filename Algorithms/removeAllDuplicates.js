/*Remove duplicates and return only distinct numbers from the original array.*/

(function removeAllDuplicates(arr){
  var count = 1
  var opArr = [arr[0]]
  for(var i = 1; i < arr.length; i++){
    if(arr[i] == arr[i-1]){
      count += 1 
      opArr.push(arr[i])
    }else{
      if(count > 1){
        while(count != 0){
          opArr.pop()
          count--
        }
      }
      count = 1 
      opArr.push(arr[i])
    }
  }
  if(count > 1){
    while(count != 0){
      opArr.pop()
      count--
    }
  }
  return opArr
})([1,1,1,2,3]) //[2,3]
