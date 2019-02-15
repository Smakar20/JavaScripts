/*
array = [2, 1, 2, 1, 1, 3, 4, 3, 5]
f(array, k) = Return the Top K most repeating integers in the array
f(array, 1) = [1]
f(array, 2) = [1, 2] OR [1, 3]
f(array, 3) = [1, 2, 3] OR [1, 3, 2]
*/

function getMostRepeated(arr, k){
  if (arr.length  === 0 || k === 0) return 0;
  var charMap = {};
  for (var i = 0; i < arr.length; i++){
    
    if ((charMap[arr[i]] !== undefined)){
      charMap[arr[i]]["count"] += 1;
    }else{
      charMap[arr[i]] = {};
      charMap[arr[i]]["num"] = arr[i];
      charMap[arr[i]]["count"] = 1;
    }
  }
  
  var sortedArr = Object.values(charMap).sort((a,b)=>{ return b.count - a.count});
  
  var i = 0;
  var output = [];
  while (i < k){
    output.push(sortedArr[i].num);
    i++;
  }
  return output;
}

// ---------------------------------------
var array = [2, 1, 2, 1, 1, 3, 4, 3, 5];
console.log(getMostRepeated(array, 1));
console.log(getMostRepeated(array, 2));
console.log(getMostRepeated(array, 3));
console.log(getMostRepeated(array, 4));
