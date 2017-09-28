/*Have the function ProductDigits(num) take the num parameter being passed which will be a positive integer, and determine the least 
amount of digits you need to multiply to produce it. For example: if num is 24 then you can multiply 8 by 3 which produces 24, so your 
program should return 2 because there is a total of only 2 digits that are needed. Another example: if num is 90, you can multiply 10 * 9, 
so in this case your program should output 3 because you cannot reach 90 without using a total of 3 digits in your multiplication. */

(function ProductDigits(num) { 
    var found = false,
    obj = {},
    shortLen = 1 + num.toString().length
    i = 2
    if(num != 1){
      while(!found){
          if(num%i == 0){
            if(shortLen > i.toString().length + (num/i).toString().length){
              shortLen = i.toString().length + (num/i).toString().length
            }
          }
          if(i == num){
            found = true
            break
          }
          i++
      }
      return shortLen
    }
    return 1 + num.toString().length
})(5000) //4
