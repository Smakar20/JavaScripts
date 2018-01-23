
function countPrimes(n){
  // initialize an array of n booleans. By default lets assume they are all prime numbers. 
  // Now, lets find all non prime numbers from 1 to n. 
  
  prime = new Array(n).fill(true)
  for (var i = 2; i <= n; i++) {
    for (var j = 2; i * j <=n; j++) {
      // i*j are all non prime numbers
      prime[i * j - 1] = false
    }
  }

  // Ignore 1 and the number itself
 var primeOut = prime.slice(1, n-1)
  
  var count = 0;
  for (var l=0; l < primeOut.length; l++) {
    if (primeOut[l]) count += 1
  }
  
  return count
}

countPrimes(5) //2
