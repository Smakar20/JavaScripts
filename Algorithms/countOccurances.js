/* Count occurrences of a given number in a sorted array which has duplicates

[1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 8, 8, 12, 12, 12]

Given the number 2, we should return 5, since it appeared 5 times in the given array.

Complexity required - O(log(n))
 */

  function countOccurances(arr, num){
    
    var startIdx = findElement(arr, 0, arr.length, num, true);
    
    if (startIdx === arr.length || arr[startIdx] !== num) return 0;
    
    var lstIdx = findElement(arr, 0, arr.length, num, false) - 1;
    console.log(`${startIdx} and ${lstIdx}`);
    return (lstIdx - startIdx) + 1;
  }

  function findElement(arr, start, end, num, left){
    while (start < end){
      var mid = parseInt((start + end)/2);
      if (arr[mid] > num || (left && arr[mid] === num)){
        end = mid;
      }
      else {
        start = mid + 1;
      }
    }
    return start;
  }

  countOccurances([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 8, 8, 12, 12, 12], 2) // 5
  
