/*
Implement debounce() with leading & trailing option.
In this problem, you are asked to implement an enhanced debounce() which accepts third parameter, option: {leading: boolean, trailing: boolean}

leading: whether to invoke right away
trailing: whether to invoke after the delay.
6. implement basic debounce() is the default case with {leading: false, trailing: true}.

for the previous example of debouncing by 3 dashes

─A─B─C─ ─D─ ─ ─ ─ ─ ─ E─ ─F─G

with {leading: false, trailing: true}, we get as below

─ ─ ─ ─ ─ ─ ─ ─D─ ─ ─ ─ ─ ─ ─ ─ ─ G

with {leading: true, trailing: true}:

─A─ ─ ─ ─ ─ ─ ─D─ ─ ─E─ ─ ─ ─ ─ ─G

with {leading: true, trailing: false}

─A─ ─ ─ ─ ─ ─ ─ ─ ─ ─E

with {leading: false, trailing: false}, of course, nothing happens.

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

expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['C@6'])
*/

function debounce(func, wait, option = {leading: false, trailing: true}) {
  const {leading, trailing} = option;
  // if both leading and trailing are false then do nothing.
  if (!leading && !trailing) return () => null;
  // in basic debounce, we kept only timerId
  // here, we will keep lastArgs too as we do trailing function call with last arguments
  let timer = null;
  let lastArgs = [];
  return (...args) => {
    // if timer is over and leading is true
    // then immediately call supplied function
    // else capture arguments in lastArgs
    if (!timer && leading) {
      func.apply(this, args);
    } else {
      lastArgs = args;
    }
    // clear timer so that next call is exactly after `wait` time
    clearTimeout(timer);
    timer = setTimeout(() => {
      // invoke only if lastArgs is present and trailing is true
      if (trailing && lastArgs?.length) {
        func.apply(this, lastArgs);
      }
      // reset timer as it need to restart new life after calling this function 
      timer = null;
    }, wait);
  }
}
