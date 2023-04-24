/*
[start, end] is a time interval, with all integers from 0 to 24.

Given schedules for all team members,

[
  [[13,15], [11,12], [10,13]], //schedule for member 1
  [[8, 9]], // schedule for member 2
  [[13, 18]] // schedule for member 3
]
You need to create a function findMeetingSlots() to return the time slots available for all the members to have a meeting.

For the input above, below slots should be returned

[[0,8],[9,10],[18,24]]
Notes

the input schedule intervals might be unsorted
one member's schedule might have overlapping intervals.
*/

function findMeetingSlots(schedules) {
  const times = schedules.flat().sort((a, b) => a[0] - b[0]);
  const result = [];
  let prevEnd = 0;

  for (let [start, end] of times) {
    if (prevEnd < start) {
      result.push([prevEnd, start]);
    }
    prevEnd = Math.max(end, prevEnd);
  }

  if (prevEnd !== 24) {
    result.push([prevEnd, 24]);
  }

  return result;
}
