// f(n) = Nth number in the fibonacci sequence
// f(1) = 1
// f(2) = 1
// f(3) = 2
// f(4) = 3

function getNthFibonacciNumber(position){
  if (position < 1) return 0;
  
  if (position === 1 || position === 2) return 1;
  
  var i = 2;
  var fibonacci = [1,1];
  var output;
  
  while (i < position){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i-2];
    output = fibonacci[i];
    i++;
  }
  return output;
}

// -----------------------------
getNthFibonacciNumber(1); // 1
getNthFibonacciNumber(4); // 3

