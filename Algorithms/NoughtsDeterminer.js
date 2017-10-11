/*Have the function NoughtsDeterminer(strArr) take the strArr parameter being passed which will be an array of size eleven. 
The array will take the shape of a Tic-tac-toe board with spaces strArr[3] and strArr[7] being the separators ("<>") between 
the rows, and the rest of the spaces will be either "X", "O", or "-" which signifies an empty space. So for example strArr may 
be ["X","O","-","<>","-","O","-","<>","O","X","-"]. This is a Tic-tac-toe board with each row separated double arrows ("<>"). 
Your program should output the space in the array by which any player could win by putting down either an "X" or "O". In the 
array above, the output should be 2 because if an "O" is placed in strArr[2] then one of the players wins. Each board will 
only have one solution for a win, not multiple wins. You output should never be 3 or 7 because those are the separator 
spaces.*/

(function NoughtsDeterminer(strArr) { 
    var arr = []
    var i = 0
    while(i < strArr.length){
        temp = []
        temp.push(strArr[i])
        temp.push(strArr[i+1])
        temp.push(strArr[i+2])
        arr.push(temp)
        i += 4
    } 
    var diag1 = [], diag2 = []
    for(var i = 0; i < arr.length; i++){
      if(tictactoeChecker(arr[i])) return i*3 + arr[i].indexOf('-') + i
      diag1.push(arr[i][i])
      diag2.push(arr[i][2-i])
      var tempArr = []
      tempArr.push(arr[0][i])
      tempArr.push(arr[1][i])
      tempArr.push(arr[2][i])
      if(tictactoeChecker(tempArr)) return tempArr.indexOf('-') * 3 + tempArr.indexOf('-') + i
    }
    
    if(tictactoeChecker(diag1)) return diag1.indexOf('-') * 3 + diag1.indexOf('-') +1 
    if(tictactoeChecker(diag2)){
      return (diag2.indexOf('-') + 1) * 3 - 1}
}(["O","-","O","<>","-","X","-","<>","-","-","X"])) // 1

function tictactoeChecker(arr){
  if(arr.indexOf('-') != -1 && arr.indexOf('-') == arr.lastIndexOf('-')){
        var temp = arr.slice()
        temp.splice(temp.indexOf('-'),1)
        if(temp[0] == temp[1]) return true
  }
  return false
}
