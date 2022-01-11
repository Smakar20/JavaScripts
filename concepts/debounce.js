/*
Debounce is a common technique used in Web Application, in most cases using lodash solution would be a good choice.

could you implement your own version of basic debounce()?

In case you forgot, debounce(func, delay) will returned a debounced function, which delays the invoke.

Here is an example.

Before debouncing we have a series of calling like

─A─B─C─ ─D─ ─ ─ ─ ─ ─E─ ─F─G

After debouncing at wait time of 3 dashes

─ ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ ─ ─ G

notes

please follow above spec. the behavior might not be exactly the same as lodash.debounce()

because window.setTimeout and window.clearTimeout are not accurate in browser environment, they are replaced to other implementation when judging your code. They still have the same interface, and internally keep track of the timing for testing purpose.

Something like below will be used to do the test.

let currentTime = 0

const run = (input) => {
  currentTime = 0
  const calls = []

  const func = (arg) => {
     calls.push(`${arg}@${currentTime}`)
  }

  const debounced = debounce(func, 3)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => debounced(arg), time)
  })
  return calls
}

expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['C@5'])
*/

function debounce(func, wait) {
  let timer = null;
  return (args) => {
      // clear timer (doesn't matter if the execution is going or has completed)
    // 1. nothing will happen in the case when execution has completed
    // 2. it will clear the timer and restart if an ongoing timer was running
    clearTimeout(timer);
    // call supplied function `func` after `wait` time
    timer = setTimeout(() => func.call(this, ...args), wait)
  }
}

// function debounce(func, wait) {
//   let timer = null;
//   return (args) => {
//     clearTimeout(timer)
//     timer = setTimeout(() => func(...args), wait)
//   }
// }
