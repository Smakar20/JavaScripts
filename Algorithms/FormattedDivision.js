/*Have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result 
as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 
and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero.
*/

(function FormattedDivision(num1,num2) {
    var res = num1/num2
    var arr = res.toString().split('.')
    var opStr1 = ''
    if(arr[0].length > 3){
      var count = 0
      for(var i = arr[0].length-1; i >= 0; i--){
        if(count%3 == 0 && i != arr[0].length-1){
          opStr1 = ',' + opStr1
        }
        opStr1 = arr[0][i] + opStr1
        count++
      }
    }else{
      opStr1 = arr[0]
    }
    
    var opStr2 = ''
    var len2 = (arr[1] == undefined) ?  0 : arr[1].length
    if(len2 > 4){
        opStr2 = arr[1].slice(0,3) + (Number(arr[1][3]) >= 5 ? (Number(arr[1][3]) +1).toString() : arr[1][3])
    }else{
      var zeroAdd = 4 - len2
      var i = 0
      opStr2 = (arr[1] == undefined) ?  '' : arr[1]
      while(i < zeroAdd){
        opStr2 += '0'
        i++
      }
    }
    return opStr1 + '.' + opStr2
}(503394930,43)) // '11,706,858.8372'
