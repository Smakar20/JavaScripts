/*Have the function CorrectPath(str) read the str parameter being passed, which will represent the movements made in a 5x5 grid
of cells starting from the top left position. The characters in the input string will be entirely composed of: r, l, u, d, ?. 
Each of the characters stand for the direction to take within the grid, for example: r = right, l = left, u = up, d = down. 
Your goal is to determine what characters the question marks should be in order for a path to be created to go from the top 
left of the grid all the way to the bottom right without touching previously travelled on cells in the grid. 

For example: if str is "r?d?drdd" then your program should output the final correct string that will allow a path to be formed 
from the top left of a 5x5 grid to the bottom right. For this input, your program should therefore return the string rrdrdrdd. 
There will only ever be one correct path and there will always be at least one question mark within the input string. */

function findPath(input) {
  var output = []
  var visited = new Set()
  findPathUtil(input, {'x':0, 'y':0}, [], output, visited)
  return output.join('')
}

function pushToOutput(path, output) {
  path.forEach((e) => {output.push(e)})
}

function findPathUtil(input, node, path, output, visited) {
  // To break the cycle
  if(visited.has(JSON.stringify(node))) {
    return
  }
  
  // Return if there is nothing in input remaining to process
  if (input == '') {
    // We have reached at the destination
    if (node.x == 4 && node.y == 4) {
      if(output.length == 0) pushToOutput(path, output) 
    }
    return
  }
  var options = findOptions(input[0], node)
  for(op of options) {
    path.push(op.direction)
    visited.add(JSON.stringify(node))
    findPathUtil(input.slice(1), op.node, path, output, visited)
    visited.delete(JSON.stringify(node))
    path.pop()
  }
}

function findOptions(direction, node) {
  var output = []
  if (direction == '?') {
    // We can go to all direction if the matrix boundaries permit.
    if (node.x + 1 <= 4) 
      output.push({'direction': 'd', 'node':{'x': node.x + 1, 'y': node.y}})
    if (node.x - 1 >= 0) 
      output.push({'direction': 'u', 'node':{'x': node.x - 1, 'y': node.y}})
    if (node.y + 1 <= 4) 
      output.push({'direction': 'r', 'node':{'x': node.x, 'y': node.y + 1}})
    if (node.y - 1 >= 0) 
      output.push({'direction': 'l', 'node':{'x': node.x, 'y': node.y - 1}})
  }
  else {
    // we have to go to the direction mentioned by the direction
    if (direction == 'd' && node.x + 1 <= 4)
      output.push({'direction': direction, 'node':{'x': node.x + 1, 'y': node.y}})
    if (direction == 'u' && node.x - 1 >= 0)
      output.push({'direction': direction, 'node':{'x': node.x - 1, 'y': node.y}})
    if (direction == 'r' && node.y + 1 <= 4)
      output.push({'direction': direction, 'node':{'x': node.x, 'y': node.y + 1}})
    if (direction == 'l' && node.y - 1 >= 0)
      output.push({'direction': direction, 'node':{'x': node.x, 'y': node.y - 1}})
  }
  
  // No error handling. either l,r,u,d or ? is expected.
  return output
}

findPath('drdr??rrddd?') //'drdruurrdddd'
