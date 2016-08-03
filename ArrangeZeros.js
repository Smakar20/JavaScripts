
//Shifting only 0's to the front of the array.
function ArrangeZero(arr)
{
	var countZero = 0;
	for(var i = arr.length-1; i >= 0; i--)
	{
		if(arr[i]==0)
		{
			countZero += 1;
			continue;
		}
		else
	  	{
		  	var temp = arr[i];
			arr[i] = arr[i+countZero];
			arr[i+countZero]= temp;
	  	}
	}
	return arr;
}

ArrangeZero([1, 4, 0, 2, 4, 0, 8, 10, 0, 11, 3, 0]);