/*Given a positive integer n>1, find the list of all lists x such that elements of x are positive integers greater than 0 and less than n, 
and elements of x add up to n.
e.g. n=4
[[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2], [1,3], [3,1]]
*/

function buildArr(n){
  var arr = []
  for(var i = 1; i < n; i++){
    arr.push(i)
  }
  return arr
}

function combinations(n){
  var output = []
  permutations(buildArr(n),output,[], 0, n)
  return output
}

function permutations(combination, output, current, sum, total){
  if(total == sum){
    output.push(current.slice())
    return
  }
  
  if(total < sum){
    return
  }
  for(var i = 0; i < combination.length; i++){
    current.push(combination[i])
    permutations(combination, output, current, sum+combination[i], total)
   current.pop() 
  }
}

combinations(4)

