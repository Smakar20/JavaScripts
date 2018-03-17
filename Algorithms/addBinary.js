/*Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
 */
var addBinary = function(a, b) {
    var lena = a.length
    var lenb = b.length
    var i =0, carry = 0
    var res = ""
    while(i<lena || i<lenb || carry!=0){
      
        var x = (i<lena) ? Number(a[lena - 1 - i]) : 0
        var y = (i<lenb) ? Number(b[lenb - 1 - i]) : 0
        res = (x + y + carry)%2 + res
        carry = Math.floor((x + y + carry)/2)
        i++
    }
    return res
};

addBinary('0','1') // '1'
