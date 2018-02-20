/*Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
 */
var spiralOrder = function(matrix) {
    if(matrix.length == 0) return matrix
    var rows = matrix.length
    var cols = matrix[0].length
    var r = 0, c = 0, output = []
    while(r < rows && c < cols){
        for(var i = c; i < cols; i++){
            output.push(matrix[r][i])
        }
        r++
        for(var i = r; i < rows; i++){
            output.push(matrix[i][cols-1])
        }
        cols--
        if(r < rows){
            for(var i = cols-1; i >= c; i--){
                output.push(matrix[rows-1][i])
            }
            rows--
        }
        
        if(c < cols){
            for(var i = rows-1; i >= r; i--){
                output.push(matrix[i][c])
            }
            c++
        }
    }
    return output
};


spiralOrder([[1,2,3],[4,5,6],[7,8,9]]) //[1,2,3,6,9,8,7,4,5]
