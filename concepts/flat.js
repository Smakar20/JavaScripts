/*
There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

Could you manage to implement your own one?

Here is an example to illustrate

const arr = [1, [2], [3, [4]]];

flat(arr)
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

flat(arr, 2)
// [1, 2, 3, 4]
*/

function flat_recursive(arr, depth = 1) {
  if (!depth) return arr;
//   let output = [];
//   arr.forEach(a => {
//       if (Array.isArray(a)) output.push(...flat(a, depth - 1));
//       else output.push(a);
//   })
 // return output;
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) acc.push(...flat_recursive(curr, depth - 1));
    else acc.push(curr);
    return acc;
  }, []);
}

function flat_iterative(arr, depth = 1) {
 if (!depth) return arr;
 let output = [];
 let queue = arr.map(a => [a, depth]);

 while (queue.length) {
  const [item, d] = queue.shift();
  if (Array.isArray(item) && d > 0) {
    queue.unshift(...item.map(i => [i, d - 1]))
  } else {
    output.push(item);
  }
 }

 return output;
}
