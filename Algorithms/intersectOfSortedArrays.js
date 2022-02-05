/*
Given 2 sorted array of integers, find the elements that exist in both arrays.

intersect(
  [1,2,2,3,4,4],
  [2,2,4,5,5,6,2000]
)
// [2,2,4]
The arrays might have duplicate numbers.
The order of returning result doesn't matter.
What is the time & space cost of your approach? Could you improve it?
*/

function intersect(arr1, arr2) {
  let [i, j] = [0, 0];
  let output = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      output.push(arr1[i]);
      i++;
      j++;
    }
    else if (arr1[i] > arr2[j]) j++;
    else i++;
  }
  return output;
}
