 /* If arr is not an array, it is just returned as-is.
 
  Example
     flatten(1)                     === 1
     flatten([1, 2, 3])             === [1, 2, 3] 
     flatten([[1], [2, 3]])         === [1, 2, 3] 
     flatten([[[[1]]], [[[2]], 3]]) === [1, 2, 3]
 */

function flatten(arr){
  if(!(Array.isArray(arr))) return arr
  var output = []
  return arr.reduce((s, a)=>{
    if(!(Array.isArray(a))){
      s.push(a)
    }else{
      s = s.concat((flatten(a)))
    }
   return s
  }, output)
}

//----- alternate method --------
function flatten(arr) {
  if(!(Array.isArray(arr))) return arr
  var output = []
  flattenUtil(arr,output)
  return output
}

function flattenUtil(arr, output){
  for(var i in arr){
    if(Array.isArray(arr[i]) === false){
      output.push(arr[i])
    }else{
      flattenUtil(arr[i], output)
    }
  }
}

flatten([[[[1]]], [[[2]], 3]]) // [1,2,3]
