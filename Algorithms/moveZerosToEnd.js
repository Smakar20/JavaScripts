/*
Given an array of integers, move zeros to the end while keeping the order of the rest.

You should make the in-place change.

const list = [1,0,0,2,3]
moveZeros(list) 
console.log(list) // [1,2,3,0,0]
What is the time & space complexity of your approach?
*/

// Time: O(n) | Space: O(1)
function moveZeros(list) {
  let countZero = 0;
	for(var i = 0; i < list.length; i++)
	{
		if(list[i] == 0) countZero += 1;
		else [list[i], list[i - countZero]] = [list[i - countZero], list[i]];
	}
  return list;
}
