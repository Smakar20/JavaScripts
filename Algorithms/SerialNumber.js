/*Have the function SerialNumber(str) take the str parameter being passed and determine if it is a valid serial number 
with the following constraints: 

1. It needs to contain three sets each with three digits (1 through 9) separated by a period.
2. The first set of digits must add up to an even number.
3. The second set of digits must add up to an odd number.
4. The last digit in each set must be larger than the two previous digits in the same set.

If all the above constraints are met within the string, the your program should return the string true, otherwise 
your program should return the string false. For example: if str is "224.315.218" then your program should return "true".*/

(function SerialNumber(str) { 
    var arr = str.split('.')
    for(var i = 0; i < arr.length; i++){
        var obj = checkSet(arr[i]) 
        if((obj.state == false) || (i == 0 && obj.sum%2 != 0) || (i == 1 && obj.sum%2 == 0)) return 'false'
    }
    return 'true'
}("224.315.218")) // true and for '4.1.1' false
 
function checkSet(str) {
    if(str.length == 1) return {'state': false}
    var largest = 0,
    sum = 0,
    obj  = {}
    for(var i = 0; i < str.length; i++){
        sum += Number(str[i])
        if(i == str.length - 1 && largest >= Number(str[i])){
            obj.state = false
            break 
        }
        if(largest < Number(str[i])) largest = Number(str[i])
    }
    obj.sum = sum
    if(obj.state == undefined) obj.state = true
    return obj
}
