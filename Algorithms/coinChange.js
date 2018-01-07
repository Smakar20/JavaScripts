function resetPermutations(permutations){
    permutations[5]=0
    permutations[10]=0
    permutations[25]=0
    permutations[50]=0
}

function addCoinToPermutations(permutations, c){
  var clone = Object.assign({}, permutations)
  clone[c]++
  return clone
}

function coinChange(denominations, max, total, permutations){
  if (total == max ){
    console.log(permutations)
    resetPermutations(permutations)
    return
  }
  
  if (total > max) {
    resetPermutations(permutations)
    return
  }
  
  var i=0
  for (d of denominations) {
    // slice below so that we do not have duplicates permutatons.
    coinChange(denominations.slice(i), max, total + d, addCoinToPermutations(permutations, d))
    i++
  }
}

coinChange([5, 10, 25, 50], 20, 0, {5:0, 10:0, 25:0, 50:0})
