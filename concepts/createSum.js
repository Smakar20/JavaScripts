/*
create a sum(), which makes following possible

const sum1 = sum(1)
sum1(2) == 3 // true
sum1(3) == 4 // true
sum(1)(2)(3) == 6 // true
sum(5)(-1)(2) == 6 // true
*/

function sum(num) {
  const func = (...args) => {
    return args.length > 0 ? sum(num + args.reduce((acc, val) =>
      acc += val
      , 0)) : num;
  }
  // overriding valueOf allows us to assign a value to func when it is type coerced
  // i.e if we are comparing func to a value, we create a function that returns what type
  // of value it returns to. Here we want to return the value of num
  func.valueOf = () => num;
  return func
}
