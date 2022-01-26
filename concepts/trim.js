/*
String.prototype.trim() is commonly used when processing strings.

It is very easy, can you implement your own one?
*/

function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}
