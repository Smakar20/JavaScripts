/*Write an efficient program to find smallest and second smallest element in an array.
Input:  arr = [12, 13, 1, 10, 34, 1]
Output: The smallest element is 1 and 
        second Smallest element is 10
*/

(function findTwoSmallest(arr){
 var firstSmall = arr[0], secondSmall = arr.reduce((a,b)=>{return Math.max(a,b)})

  for(var i = 0; i < arr.length; i++){
    if(arr[i] < firstSmall){
      secondSmall = firstSmall
      firstSmall = arr[i]
    }
    else if(arr[i] < secondSmall && arr[i] != firstSmall) secondSmall = arr[i]
  }

  return `${firstSmall}, ${secondSmall}`
})([12, 13, 1, 10, 34, 1]) // '1, 10'
