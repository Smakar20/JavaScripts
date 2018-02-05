/*Find path from [0][0] to [n-1][n-1] in n x n matrix. You can only move in [i+1][j] and [i][j+1] direction. If the value in those 
locations is -1 then you can not move in that direction. -1 is obstacle where 0 is not.*/

function findPath(matrix){
  var visited = new Set()
  var paths = []
  findPathUtil(matrix, paths, [], [0,0],[matrix.length - 1, matrix.length - 1], visited)
  return paths.length
}

function findPathUtil(matrix, paths, currentPath, node, destination, visited){
  
/* moving in only two direction makes it a directed graph. So no need of keeping visited. But there is no harm in keeping the 
visited reference.But, we need to keep the visited only in the curent path. once we backtrack since we want to be able to visit
those nodes again we should remove it. */
  
  if(visited.has(JSON.stringify(node))) return
  if(node[0] == destination[0] && node[1] == destination[1]){
    paths.push(currentPath.slice())
    return
  }
  
  var options = getOptions(matrix,node)
  
  for(var ch of options){
    currentPath.push(node)
    visited.add(JSON.stringify(node))
    findPathUtil(matrix, paths, currentPath, ch, destination, visited)
    currentPath.pop()
    visited.delete(JSON.stringify(node))
  }
}

function getOptions(matrix,node){
  var i = node[0]
  var j = node[1],
  output = []
  if((i+1) < matrix.length && matrix[i+1][j] != -1)  output.push([i+1,j])
  if((j+1) < matrix[i].length && matrix[i][j+1] != -1) output.push([i,j+1])
  return output
}

//-- test --
var matrix = [[0,0,0,0],
              [0,-1,0,0],
              [-1,0,0,0],
              [0,0,0,0]]

findPath(matrix) // 4
