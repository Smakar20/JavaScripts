// Find minimum no of swap needed to sort an array

var minimumNumSwapNeeded =function(arr) {
  // make an additional array of <elem, original_position>
  var positionArr = []
  
  arr.forEach((e, idx)=>{positionArr.push({'element': e, 'position':idx, 'visited':false})})
  positionArr.sort((a, b)=>{return a.element - b.element})
  
  var result = 0
  // for each element find if they need to be swapped
  for (var i=0; i < arr.length; ++i) {
    // skip if element is already visited or at its right place
    if (positionArr[i].visited || positionArr[i].position == i) continue
    
    // find how many swaps needed for current element
    var tempCount = 0
    var j = i
    while (!positionArr[j].visited) {
      positionArr[j].visited = true
      
      // keep moving until find an element which is visited
      j = positionArr[j].position
      tempCount++
    }
    
    // -1 here because when we break the loop we have already reached to an element
    // which is at its right place so the last swap is not needed
    result += tempCount - 1
  }
  
  return result
}


minimumNumSwapNeeded([4, 3, 1, 2]) // 3
