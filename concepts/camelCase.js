/*
Implement a function camelCaseKeys, that takes an object and returns a new object with all its keys converted to camel case.

Camel case is a practice where words are separated with a single capitalized letter and the first letter of the word will be lower case. Some examples:

String	camelCase
foo	Yes
fooBar	Yes
FooBar	No
Foo_Bar	No
foo_bar	No
Examples
camelCaseKeys({ foo_bar: true });
// { fooBar: true }

camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } });
// { fooBar: true, barBaz: { bazQux: '1' } }

camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }]);
// [{ bazQux: true }, { foo: true, bar: [{ fooBar: 'hello' }] }]
Notes
You can assume the input is always a valid, plain JavaScript object or array.
*/


/**
 * @template {Record<string, unknown>|Array<unknown>} T
 * @param {T} object
 * @return {T}
 */
export default function camelCaseKeys(object) {
  if (typeof object !== 'object' || object === null) return object;
  let newObj;
  if (Array.isArray(object)) {
    newObj = [];
    for (let e in object) {
      newObj[e] = (typeof object[e] === 'object') ? camelCaseKeys(object[e]) : object[e];
    }
  } else {
    newObj = {};
    for (let [key, val] of Object.entries(object)) {
      const keys = String(key).split('_');
      let camelcasedKey = '';
      for (let k in keys) {
        if (k == 0) camelcasedKey += keys[k];
        else camelcasedKey += keys[k].split('').map((m, i) => i === 0 ? m.toUpperCase() : m.toLowerCase()).join('');
      }
      if (typeof val !== 'object') {
        newObj[camelcasedKey] = val;
      } else {
        newObj[camelcasedKey] = camelCaseKeys(val);
      }
    }
  }
  return newObj;
}
