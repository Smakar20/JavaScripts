
/*Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.*/

function search(arr, target){
  if(arr.length == 0) return -1
  var start = findHead(arr, 0, arr.length-1)
  var idx = binarySearch(arr,target, 0, start)
  if(idx != -1) return idx
  return binarySearch(arr,target, start, arr.length - 1)
}

function findHead(arr, start, end){
  if(start == end) return start
  var mid = parseInt((start+end)/2)
  if(arr[0] > arr[mid]){
    return findHead(arr, start, mid)
  }else{
    return findHead(arr, mid+1, end)
  }
}

function binarySearch(arr, num, start, end){
    if(arr.length == 0 || (arr.length == 1 && arr[0] != num) || (start > end)) return -1
    var mid = parseInt((start+end)/2)
    if(num == arr[mid]){
      return mid
    }else if(num > arr[mid]){
       return binarySearch(arr,num, mid+1,end)
    }else if(num < arr[mid]){
      return binarySearch(arr,num, start, mid-1)
    }
}

search([], 5) // -1
