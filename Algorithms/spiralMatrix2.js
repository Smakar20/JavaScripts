/*Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]*/

var generateMatrix = function(n) {
    var row = n
    var col = n
    var r = 0, c = 0
    var output = new Array(n)
    var num = 1
    for(var i = 0; i < n; i++){
        output[i] = new Array(n)
    }
    
    while(r < row && c < col){
        for(var i = c; i < row; i++){
           output[r][i] = num
           num++ 
        }
        r++
        
        for(var i = r; i < col; i++){
            output[i][col-1] = num
            num++
        }
        col--
        
        if(r < row){
            for(var i = col-1; i >= c; i--){
                output[row-1][i] = num
                num++
            }
            row--
        }
        
        if(c < col){
            for(var i = row-1; i >= r; i--){
                output[i][c] = num
                num++
            }
            c++
        }
    }
    return output
};

generateMatrix(3) //[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
