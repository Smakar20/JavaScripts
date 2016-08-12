//Merging 2 sorted arrays.
function sorting(arr1,arr2)
{
	arr1.forEach(function(ele){
		for(i=0;i<arr2.length;i++)
		{
			if(arr2[i]>=ele)
			{
				arr2.splice(i,0,ele);
				break;
			}
			else if(i == arr2.length-1)
			{
				arr2.push(ele);
				break;
			}
		}
	});
	return arr2;
}

sorting([1,2,4,6,8,9,10],[3,5,7]);
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]