/*
Given two arrays, find the intersection(items occur in both arrays)

arrays are not sorted, and might have duplicates.
you can modify the arrays
you can return the items in any order, but without duplicates.
This is a simple problem, What is the time & space complexity of your approach?
*/

function getIntersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  return [...set1].filter(s => set2.has(s));
}
