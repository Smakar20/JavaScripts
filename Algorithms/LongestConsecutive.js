/*Have the function LongestConsecutive(arr) take the array of positive integers stored in arr and return the length of the longest consecutive subsequence (LCS). An LCS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in a consecutive, increasing order. The sequence does not need to be contiguous and there can be several different subsequences. For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9] then a few consecutive sequences are [1, 2, 3, 4], and [8, 9]. For this input, your program should return 4 because that is the length of the longest consecutive subsequence.*/

(function LongestConsecutive(arr) { 
    arr = arr.sort((a,b)=>{return a-b})
    var seq = [], len = 0
    for(var j = 0; j < arr.length; j++){
      seq.push(arr[j])
      for(var i = j+1; i < arr.length; i++){
        if(arr[i] == arr[i-1]){
          continue
        }
        if(arr[i] != arr[i-1] + 1){
            break
        }
        seq.push(arr[i])
      }
      if(len < seq.length) len = seq.length
      seq = []
    }
    return len
}([11, 6, 6, 5, 7, 10, 1, 2, 3, 12, 9, 8])) //8
