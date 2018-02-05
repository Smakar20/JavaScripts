/*Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

For example,
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/
var numberToWords = function(num) {
    if(num == 0) return 'Zero'
    var output = ''
    while(num > 0){
        if(num >= 1000000000){
            output += numberToWords(parseInt(num/1000000000)) + ' Billion '
            num = num%1000000000
        }else if(num >= 1000000){
            output += numberToWords(parseInt(num/1000000)) + ' Million '
            num = num%1000000
        }else if(num >= 1000){
            output += numberToWords(parseInt(num/1000)) + ' Thousand '
            num = num%1000
        }else if(num >= 100){
            output += numberToWords(parseInt(num/100)) + ' Hundred '
            num = num%100
        }else{
            output += buildStr(num)
            break
        }
    }
    return output.trim()
};


function buildStr(num){
    var lessThanTwty = {1: 'One',
                       2: 'Two',
                       3: 'Three',
                       4: 'Four',
                       5: 'Five',
                       6: 'Six',
                       7: 'Seven',
                       8: 'Eight',
                       9: 'Nine',
                       10: 'Ten',
                       11: 'Eleven',
                       12: 'Twelve',
                       13: 'Thirteen',
                       14: 'Fourteen',
                       15: 'Fifteen',
                       16: 'Sixteen',
                       17: 'Seventeen',
                       18: 'Eighteen',
                       19: 'Nineteen'
                      }
    var grtThanTwty = { 2: 'Twenty',
                       3: 'Thirty',
                       4: 'Forty',
                       5: 'Fifty',
                       6: 'Sixty',
                       7: 'Seventy',
                       8: 'Eighty',
                       9: 'Ninety'    
                     }
    var output = ''
    while(num > 0){
        if(num >= 20){
           output += grtThanTwty[parseInt(num/10)] + ' '
           num = num%10 
        }else{
            output += lessThanTwty[num]
            break
        }
    }
   return output 
}


numberToWords(12345) //"Twelve Thousand Three Hundred Forty Five"
