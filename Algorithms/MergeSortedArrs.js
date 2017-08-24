//Merging 2 sorted arrays.
'use strict'
function sorting(arr1,arr2)
{
  var position = 0
	arr1.forEach(function(ele){
		for(var i=position; i<arr2.length; i++)
		{
			if(arr2[i]>=ele)
			{
				arr2.splice(i,0,ele)
				position = i + 1
				break
			}
			else if(i == arr2.length-1)
			{
				arr2.push(ele)
				break
			}
		}
	})
	return arr2
}

sorting([1,2,4,6,8,9,10],[3,5,7]);
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
