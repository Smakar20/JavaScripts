/*
Given an array of numbers and a target number, find the sum of two numbers from the array that is equal to the target number. May not sum the same index twice.
Return these numbers. If no numbers sum up to target sum, the function should return an empty array.

example: 
"array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
"targetSum": 18

output: [3, 15]
*/

//---------------------- solution 1 ----------------------
function twoNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	let left = 0;
	let right = array.length - 1;
	
	while (left < right) {
		const currentSum = array[left] + array[right];
		if (targetSum === currentSum) {
			return [array[left], array[right]];
		} else if(targetSum > currentSum) {
			left++;
		} else {
			right--;
		}
	}
	return [];
}

//----------------------- solution 2 --------------------
function twoNumberSum(array, targetSum) {
	let numberMap = new Map();
	for (let a of array) {
		let diff = targetSum - a;
		if(numberMap.has(diff)) {
			return [diff, a];
		} 
		numberMap.set(a, true);
	}
	return [];
}
