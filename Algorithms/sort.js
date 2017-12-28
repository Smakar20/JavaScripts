//Sorting an array.

(function sort(inp){
  if(inp.length == 0 || inp.length == 1) return arr
  
  var opArr = [],
  arr = inp.slice()
  while(inp.length != opArr.length){
    opArr.push(findMax(arr))
      var idx = arr.indexOf(opArr[opArr.length - 1])
      arr.splice(idx,1)
  }
  return opArr.reverse()
})([5,2,3,1,4,-2]) //[-2,1,2,3,4,5]

function findMax(arr){
  if(arr.length == 0) return
  var max= false
  for(var i = 0; i < arr.length; i++){
    if(!max){
      max = arr[i]
      continue
    }
     if(max < arr[i]) max = arr[i]
  }
  return max
}
