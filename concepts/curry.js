/*
- Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

- Currying doesn’t call a function. It just transforms it.

- Currying is a useful technique used in JavaScript applications.

Please implement a curry() function, which accepts a function and return a curried one.

Here is an example:

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
more to read

https://javascript.info/currying-partials

*/


// method 1
function curry(fn) {
  return function makeCurry(...args) {
    return args.length < fn.length ? makeCurry.bind(this, ...args) : fn(...args);
  };
}

// method 2
function curry(fn) {
  return function curried (...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return ((...args2) => {
        return curried.apply(this, args.concat(args2));
      });
    }
  }
}
