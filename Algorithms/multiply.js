/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */
var multiply = function(num1, num2) {
  if (num1 == 0 || num2 == 0) return '0';
    var finalProd = '';
    var counter = 0;
    for(var i = num2.length-1; i >= 0; i--){
        var prod = '';
        var carry = 0;
        for(var j = num1.length-1; j >= 0; j--){
            var sum = String((Number(num1[j]) * Number(num2[i])) + carry);
            carry =  (sum > 9) ? Number(sum.substr(0,sum.length-1)) : 0;
            prod = sum.substr(sum.length-1) + prod;
        }
        if(carry !== 0) prod = String(carry) + prod;
        
        if (counter > 0){
            var x = 0;
            while (x < counter){
                prod += '0';
                x++;
            }
        }
        counter++;
        finalProd=addToArrayForm(finalProd.split(''), prod.split(''));
        console.log('finalProd: ', finalProd)
    }
    return finalProd;
};
   
function addToArrayForm(A, K) {
  var carry = 0;
  var output = [];
  var iterator = ((A.length > K.length) ? A : K).reverse();
  var toAddNum = ((A.length > K.length) ? K : A).reverse();
  for (var i = 0; i < iterator.length; i++){
    var sum = Number(iterator[i]) + carry;
    if (toAddNum[i] != undefined) sum += Number(toAddNum[i]);

    carry = 0;
    if (sum > 9){
      var strSum = String(sum);
      carry = Number(strSum.substr(0, strSum.length - 1));
      output.push(strSum.substr(strSum.length - 1));
      continue;
    }
    output.push(sum);
  }
  if (carry !== 0) output.push(carry);
  return output.reverse().join(''); 
};    
    

    /*
    Input: num1 = "123", num2 = "456"
Output: "56088"
     */
    multiply('9133','0'); // '0'
