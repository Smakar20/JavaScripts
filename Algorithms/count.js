/*
Please create a function count(), when called it should return how many times it has been called, count.reset() should also be implemented.

count() // 1
count() // 2
count() // 3

count.reset()

count() // 1
count() // 2
count() // 3
*/

const count = (() => {
  let counter = 0;
  const increment = () => counter += 1;
  increment.reset = () => counter = 0;
  return increment;
})()
