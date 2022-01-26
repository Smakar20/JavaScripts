/*
Implement curry() with placeholder support.
Here is an example

const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(_, 2)(1, 3) // '1_2_3'

curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
*/

function curry(fn) {
  return function curried(...args) {
    // If the arguments are extra then eliminate them
    // we don't want to pass 6 arguments when the expected is 3.
    // it will interfere with our placeholder logic
    const currentArgs = args.slice(0, fn.length);
    // see if placeholder is available in arguments
    const hasPlaceholder = currentArgs.find(c => c === curry.placeholder);
    // if no placeholder and arguements are equal to what expected then it is normal function call
    if(!hasPlaceholder && currentArgs.length === fn.length) {
      return fn.apply(this, currentArgs);
    }
    // else we need to replace placeholders with actual values
    // we call helper function `mergeArgs` for this
    // we pass first and next arguments to helper function
    return ((...args2) => curried.apply(this, buildArgs(currentArgs, args2)));
  }
}

function buildArgs(arr1, arr2) {
  let output = [];
  // iterate over args (because we need to replace from it) 
  // in each iteration, if we find element == curry.placeholder
  // then we replace that placeholder with first element from nextArgs
  // else we put current element
  for (let a of arr1) {
    output.push((a === curry.placeholder) ? arr2.shift() : a);
  }
  // we merge both, because there might be chance that args < nextArgs
  return [...output, ...arr2];
}


curry.placeholder = Symbol()


function join(a, b, c) {
  return `${a}_${b}_${c}`
}
console.log('here: ', curry(join)(1,2,3,4)); //1_2_3
