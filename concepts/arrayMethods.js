/*Implement your own map, filter and reduce methods myMap(Callback), myFilter(callback), myReduce(callback, initialValue) respectively.*/

Array.prototype.myMap = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this));
  }
  return output;
}

Array.prototype.myFilter = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i , this) === true) output.push(this[i]);
  }
  return output;
}

Array.prototype.myReduce = function (callback, initialValue) {
  if (!this.length) return initialValue;
  let result = initialValue;
  let idx = 0;
  if (result === undefined) {
    result = this[0];
    idx = 1;
  } 
  for (let i = idx; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
}
