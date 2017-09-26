/*Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly 
formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. 
The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str 
is 1:00pm-11:00am the output should be 1320.*/

(function CountingMinutesI(str) { 
var arr = str.split("-");
var firstHour = parseInt(arr[0].slice(0, arr[0].indexOf(':'))),
secondHour = parseInt(arr[1].slice(0,arr[1].indexOf(':'))),
firstMin = parseInt(arr[0].slice(arr[0].indexOf(':') + 1,arr[0].length-2)),
secondMin = parseInt(arr[1].slice(arr[1].indexOf(':') + 1,arr[1].length-2)),
firstMer = arr[0].slice(-2)
secondMer = arr[1].slice(-2)
if(firstMer == "am" && firstHour == 12){
  firstHour = 0
}
if(secondMer == "am" && secondHour == 12){
  secondHour = 0
}
if(firstMer == "pm" && firstHour != 12){
  firstHour = firstHour + 12
}
if(secondMer == "pm" && secondHour != 12){
  secondHour = secondHour + 12
}

var time1 = firstHour*60 + firstMin 
var time2 = secondHour*60 + secondMin
var diff = time2 - time1

if(diff < 0){
  diff = diff + (60*24)
}
  
  return diff; 
         
}("1:00pm-11:00am"))
