
/*
I believe you've used JSON.stringify() before, do you know the details of how it handles arbitrary data?

In this problem, you are asked to implement your own version of JSON.stringify().

In a real interview, you are not expected to cover all the cases, just decide the scope with interviewer. But for a goal of practicing, your code here will be tested against a lot of data types. Please try to cover as much as you can.

Attention to the circular reference.

note

JSON.stringify() support two more parameters which is not required here.

Don't use JSON.stringify() in your code here, it doesn't help you practicing coding skills.
 */
function stringify(data) {
   if (typeof data === 'bigint') throw new Error();
  if ([null, undefined, NaN, Infinity].includes(data)) return 'null';
  if (['number', 'boolean'].includes(typeof data)) return `${data}`;
  if (typeof data === 'string') return `"${data}"`;
  if (typeof data === 'function') return undefined;
  if (typeof data === 'symbol') return 'null';
  if (data instanceof Date) return `"${data.toISOString()}"`;

  if (Array.isArray(data)) {
    const arr = data.map(item => stringify(item));
    return `[${arr.join(',')}]`;
  }
  
  if (typeof data === 'object') {
    const arr = [];
    Object.entries(data).forEach(([key, val]) => {
      if ([undefined, Infinity].includes(val)) return;
      if (typeof val === 'function') return;
      arr.push(`"${key}":${stringify(val)}`);
    })
    return `{${arr.join(',')}}`;
  }

  return '';
}
