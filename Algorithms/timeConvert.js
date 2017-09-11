/* Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes 
the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes 
with a colon. */

(function timeConvert(num) { 

  // code goes here  
  if(num == 0) return "0:0"
  if(num < 60) return "0:" + num.toString()
  return Math.floor((num/60)).toString() + ":" + (num%60).toString()
         
}(100))
