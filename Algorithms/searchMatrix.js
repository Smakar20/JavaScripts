/*Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/

var searchMatrix = function(matrix, target) {
    for(var i = 0; i < matrix.length; i++){
        if(matrix[i][0] == target || matrix[i][matrix[i].length-1] == target) return true
        if(target > matrix[i][0] && target < matrix[i][matrix[i].length-1]){
            for(var j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] == target) return true
            }
        }
    }
    return false
};

searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]],13) //false
