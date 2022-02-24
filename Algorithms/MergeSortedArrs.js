/*Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of 
elements initialized in nums1 and nums2 are m and n respectively.*/

var merge = function(nums1, m, nums2, n) {
    var i = m-1
    var j = n-1
    for (var k = m+n-1; k >= 0; k--) {
        if (i < 0) nums1[k] = nums2[j--]
        else if (j < 0) nums1[k] = nums1[i--]
        else if (nums1[i] < nums2[j]) nums1[k] = nums2[j--]
        else nums1[k] = nums1[i--]
    }
};


//--------Merging 2 sorted arrays----------
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

sorting([1,2,4,6,8,9,10],[3,5,7]); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
