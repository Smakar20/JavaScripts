/*
Given an array of integers, all integers appear twice except one integer, could you quickly target it ?

const arr = [10, 2, 2 , 1, 0, 0, 10]
findSingle(arr) // 1
What is time & space cost of your approach ? Could you do better ?

*/

// Time: O(n) | Space: O(n)
function findSingle(arr) {
  let numObj = {};
  for (let i = 0; i < arr.length; i++) {
    numObj[arr[i]] = (!!numObj[arr[i]]) ? false : true;
  }
  return Number(Object.keys(numObj).filter(k => numObj[k])[0]);
}

//Time: O(n) | Space: O(1)
function findSingle(arr) {
  let res = 0
  arr.forEach( num => res ^= num )
  return res
}
