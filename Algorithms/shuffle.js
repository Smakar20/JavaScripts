// Shuffle an Array

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Shuffle(arr) {
  for ( var i=0; i < arr.length; ++i) {
    var randomInt = getRandomInt(i)
    // swap the two elements
    var temp = arr[i]
    arr[i] = arr[randomInt]
    arr[randomInt] = temp
  }
  
  // the output array here will have unpredictable order of elements. Meaning they are shuffled.
  return arr
}

Shuffle([1,2,3,4,5,6])
