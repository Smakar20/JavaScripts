/*
Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
  if (a.length === 0 && b.length === 0) return '';
  if (a.length === 0) return b;
  if (b.length === 0) return a;
  let [i , j, carry, output] = [a.length - 1, b.length - 1, 0, ''];
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += Number(a[i]);
      i--;
    }
    
    if (j >= 0) {
      sum += Number(b[j]);
      j--;
    }
    
    carry = Math.floor(sum / 10);
    output = (sum % 10) + output;
  }
  return (carry > 0 ? carry + output : output);
}
