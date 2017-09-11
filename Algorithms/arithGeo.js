/*Have the function arithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. */

(function arithGeo(arr){
  let diff = Math.abs(arr[1] - arr[0]),
      geo = Math.abs(arr[1]/arr[0]),
      lastDiff = 0
      lastGeo = 0
      
  for(let i = 2; i < arr.length; i++){
    if(i == 2){
      lastDiff = Math.abs(arr[i] - arr[i-1]),
      lastGeo = Math.abs(arr[i]/arr[i-1])
      continue
    }
    
    if(diff != lastDiff && geo != lastGeo) return -1
    if(lastDiff != Math.abs(arr[i] - arr[i-1]) && lastGeo != Math.abs(arr[1]/arr[0])) return -1
    lastDiff = Math.abs(arr[i] - arr[i-1])
    lastGeo = Math.abs(arr[i]/arr[i-1])
  }
  if(diff == lastDiff) return "Arithmetic"
  if(geo == lastGeo) return "Geometric"
}([1,2,3,4,5,10,20]))
