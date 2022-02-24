/*
Write a function that takes in a non-empty list of non-empty sorted arrays of integers and returns a merged list of all of those arrays.
The integers in the merged list should be in sorted order.
Example:
array = [
[1, 5, 9, 21],
    [-1, 0],
    [-124, 81, 121],
    [3, 6, 12, 20, 150]
]

output = [-124, -1, 0, 1, 3, 5, 6, 9, 12, 20, 21, 81, 121, 150]
*/

function mergeSortedArrays(arrays) {
	let output = [...arrays[0]];
	let cur = 1;
	while (cur < arrays.length) {
		let [i, j] = [0, 0];
		while (i < output.length || j < arrays[cur].length) {
			if (i >= output.length) {
				output.push(...arrays[cur].slice(j));
				break;
			}
			if (j >= arrays[cur].length) break;
			if (output[i] >= arrays[cur][j]) {
				output.splice(i, 0, arrays[cur][j]);
				j++;
				continue;
			} 
			i++;
		}
		cur++;
	}
	return output;
}
