/*Determine if a Sudoku is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.*/

var isValidSudoku = function(board) {
    for(var i = 0; i < board.length; i++){
        if(board.length != board[i].length) return false
        var row = [],
            column = []
        for(var j = 0; j < board[i].length; j++){
            if(board[i][j] != '.'){
                if(row.includes(board[i][j])) return false
                row.push(board[i][j])
            }
            
            if(board[j][i] != '.'){
               if(column.includes(board[j][i])) return false
                column.push(board[j][i]) 
            }         
        }
    }
    
    for(var i = 0; i < board.length; i += 3){
        for(var j = 0; j < board.length; j += 3){
            if(!validateMatrix(board,i,j)) return false
        }
    }
    return true
};

function validateMatrix(board,x,y){
    var table = []
    for(var i = x; i < x+3; i++){
        for(var j = y; j < y+3; j++){
            if(board[i][j] != '.'){
                if(table.includes(board[i][j])) return false
                table.push(board[i][j])
            }
        }
    }
    return true
}

//-----test--------
var board = [[5,3,'.','.',7,'.','.','.','.'],
             [6,'.','.',1,9,5,'.','.','.'],
             ['.',9,8,'.','.','.','.',6,'.'],
             [8,'.','.','.',6,'.','.','.',3],
             [4,'.','.',8,'.',3,'.','.',1],
             [7,'.','.','.',2,'.','.','.',6],
             ['.',6,'.','.','.','.',2,8,'.'],
             ['.','.','.',4,1,9,'.','.',5],
             ['.','.','.','.',8,'.','.',7,9]]
             
isValidSudoku(board)
