/*
We will calculate the angle between 0 to hour needle and between 0 to minute needle.
Then substract these two to get the angle. Also if the final angle is > 180 we can substract it
from 360.
*/

function angle(hour, minute) {
  var minuteNeedleAngleForEveryMinute = 360/60
  var hourNeedleAngleForEveryHour = 360/12
  var hourNeedleAngleForEveryMinute = 360/12/60
  var hourNeedleAngleFromZero = hour * hourNeedleAngleForEveryHour + minute * hourNeedleAngleForEveryMinute
  var minuteNeedleAngleFromZero = minute * minuteNeedleAngleForEveryMinute
  var result = Math.abs(hourNeedleAngleFromZero - minuteNeedleAngleFromZero)
  
  // Clarify if want to return an angle more than 180 or not
  return (result < 180) ? result : 360 - result
}

angle(6, 00) //180
