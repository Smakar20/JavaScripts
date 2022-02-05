/*
How would you implement a shuffle() ?

When passed with an array, it should modify the array inline to generate a randomly picked permutation at the same probability.

for an array like this:

const arr = [1, 2, 3, 4]
there would be possibly 4! = 24 permutations

[1, 2, 3, 4]
[1, 2, 4, 3]
[1, 3, 2, 4]
[1, 3, 4, 2]
[1, 4, 2, 3]
[1, 4, 3, 2]
[2, 1, 3, 4]
[2, 1, 4, 3]
[2, 3, 1, 4]
[2, 3, 4, 1]
[2, 4, 1, 3]
[2, 4, 3, 1]
[3, 1, 2, 4]
[3, 1, 4, 2]
[3, 2, 1, 4]
[3, 2, 4, 1]
[3, 4, 1, 2]
[3, 4, 2, 1]
[4, 1, 2, 3]
[4, 1, 3, 2]
[4, 2, 1, 3]
[4, 2, 3, 1]
[4, 3, 1, 2]
[4, 3, 2, 1]
your shuffle() should transform the array in one of the above array, at the same 1/24 probability.

notes: Your shuffle() will be called multiple times, to calculate the probability on each possible result, and test again standard deviation
*/

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randonIdx = getRandomInx(i + 1);
    [arr[i], arr[randonIdx]] = [arr[randonIdx], arr[i]];
  }
   // the output array here will have unpredictable order of elements. Meaning they are shuffled.
  return arr;
}

function getRandomInx(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//--------- test -------------
const arr = [1, 2, 3, 4];
Shuffle(arr);
