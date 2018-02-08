/*Longest palindromic sub sequence.*/

function longestPalindromicSubsequenceLength(input, count, start, end) {
  if(end < start) return count
  if(end == start) return count + 1
  
  for(var i = start; i <= end; ++i ) {
    for (var j = end; j >= i + 1; --j) {
      if(input[i] == input[j]) {
          return Math.max(
            longestPalindromicSubsequenceLength(input, count+2, i+1, j-1),
            longestPalindromicSubsequenceLength(input, count, i+1, end)
            )
      }
    }
  }
  
  return count + 1
}

var input = 'bbbab'
longestPalindromicSubsequenceLength(input, 0, 0, input.length-1)
