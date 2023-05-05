/*
Implement a function that returns a new object after squashing the input object into a single level of depth where nested keys are "squashed" together with a period delimiter (.).

Examples
const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
Any keys with null-ish values (null and undefined) are still included in the returned object.

const object = {
  a: { b: null, c: undefined },
};
squashObject(object); // { 'a.b': null, 'a.c': undefined }
It should also work with properties that have arrays as the value:

const object = { a: { b: [1, 2, 3], c: ['foo'] } };
squashObject(object); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }

*/

export default function squashObject(obj, path = [], output = {}) {
  for (let [key, val] of Object.entries(obj)) {
    if (typeof val !== 'object' || val === null) {
      output[path.concat(key).filter(Boolean).join('.')] = val;
    } else {
      squashObject(val, [...path, key], output);
    }
  }
  return output;
}
