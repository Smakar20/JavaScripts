//How to sort using an arbitrary order?

// Note that this is simple bubble sort but it takes a Comparator as an input to 
// compare two elements and it does not care whether it is sorting asceending or descending.
// All it does it compare elements using Comparator and sort based on that.

function bubbleSort(array, Comparator) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 1; j < array.length; j++) {
      if(Comparator(array[j - 1], array[j])) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}

function ComparatorAscending(a, b) {
  return a > b
}

function ComparatorDescending(a, b) {
  return a < b
}

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Note the same function bubbleSort can be used to sort ascending or descending based
// on Comparator
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

bubbleSort(array, ComparatorAscending); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
bubbleSort(array, ComparatorDescending); // => [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
