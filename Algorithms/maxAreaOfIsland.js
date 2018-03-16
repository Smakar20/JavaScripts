/*Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or 
vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

Example 2:
[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.*/


var maxAreaOfIsland = function(grid) {
  var maxArea = 0;
  var visited = new Array(grid.length)
  for(var i=0; i < grid.length; ++i) {
    visited[i] = new Array(grid[0].length).fill(false)
  }
  
  for (var i=0; i < grid.length; ++i) {
    for (var j=0; j < grid[i].length; ++j) {
      if (grid[i][j] == 1) {
        maxArea = Math.max(maxArea, getArea(grid, i, j, visited))
      }
    }
  }  
  return maxArea
};

function getArea(grid, startX, startY, visited) {
  if (visited[startX][startY]) {
    return 0
  }
  visited[startX][startY] = true
  
  var area = 1
  for(op of getOptions(grid, startX, startY, visited)) {
    area += getArea(grid, op.X, op.Y, visited) 
  }
  
  return area
}

function getOptions(grid, fromX, fromY, visited) {
  var options = []
  // try Up
  if (fromX - 1 >= 0 && grid[fromX - 1][fromY] == 1) {
    options.push({X:fromX-1, Y:fromY})
  }
  
  // try Down
  if (fromX + 1 <= grid.length-1 && grid[fromX + 1][fromY] == 1) {
    options.push({X:fromX+1, Y:fromY})
  }
  
  // try Left
  if (fromY - 1 >= 0 && grid[fromX][fromY-1] == 1) {
    options.push({X:fromX, Y:fromY-1})
  }

  // try Right
  if (fromY + 1 <= grid[fromX].length - 1 && grid[fromX][fromY+1] == 1) {
    options.push({X:fromX, Y:fromY+1})
  }
  
  return options
}
