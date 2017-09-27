/*Have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, take its 
binary representation, reverse that string of bits, and then finally return the new reversed string in decimal form. For 
example: if str is "47" then the binary version of this integer is 00101111. Your program should reverse this binary 
string which then becomes: 11110100 and then finally return the decimal version of this string, which is 244.*/

(function BinaryReversal(str) { 
    var bin = parseInt(str).toString(2).toString()
    while(bin.length % 8 !== 0) {
    bin = "0" + bin;    
  }
    var revBin = bin.split('').reverse().join('')
    return parseInt(revBin, 2)
}('12345')) //39948
