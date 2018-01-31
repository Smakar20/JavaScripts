//binary search algorithm

function binarySearch(arr,num){
  return binarySearchUtil(arr, num, 0, arr.length - 1)
}

function binarySearchUtil(arr, num, start, end){
  if(arr.length == 0 || (arr.length == 1 && arr[0] != num) || (start > end)) return false
  
  var mid = parseInt((start+end)/2)
  if(num == arr[mid]) return true
  if(num < arr[mid]) return binarySearchUtil(arr,num,start,mid-1)
  if(num > arr[mid]) return binarySearchUtil(arr,num,mid+1,end)
}

binarySearch([1,1,1,1,2,3,3,4,7],3) //true

//alternate method
function BinarySearch(arr,key)
{
	var midIdx = parseInt(arr.length/2);
	var mid = arr[midIdx];
	var flag = false;
	
	if(arr.length === 0)
	{
		return false;
	}
	
	if(arr.length === 1 && arr[0] !== key)
	{
		return false;
	}
	
	if(key === mid)
	{
		return true;
	}
	else if(key < mid)
	{
		flag =  BinarySearch(arr.slice(0,midIdx), key);
	}
	else
	{
		flag = BinarySearch(arr.slice(midIdx), key);
	}
	return flag;
}


BinarySearch([3], 3)
