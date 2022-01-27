/*
Create an object with property count, which increments every time count is accessed, initial value is 0.

const counter = createCounter()
counter.count // 0, then it should increment
counter.count // 1
counter.count // 2
counter.count = 100 // it cannot be altered
counter.count // 3
*/

function createCounter(): {count: number } {
  let counter = 0
  return {
    get count() {
      return counter++;
    }
  }
}
