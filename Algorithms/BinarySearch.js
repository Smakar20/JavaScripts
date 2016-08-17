
//binary search algorithm
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