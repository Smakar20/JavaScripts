/*There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */

var findMedianSortedArrays = function(nums1, nums2) {
    var totalLen = nums1.length + nums2.length
    var isEven = ((totalLen/2)%1 == 0)
    var idxToFill = (isEven) ? totalLen/2 : Math.floor(totalLen/2)
    var mergedArr = []
    var mergedIdx = 0
    var nums1Idx = 0
    var nums2Idx = 0
    while(mergedIdx <= idxToFill){
        var nums1OutOfRange = (nums1Idx >= nums1.length)
        var nums2OutOfRange = (nums2Idx >= nums2.length)
        
        if(nums2OutOfRange || (nums1[nums1Idx] < nums2[nums2Idx])){
            mergedArr[mergedIdx] = nums1[nums1Idx]
            nums1Idx++
        }else{
            mergedArr[mergedIdx] = nums2[nums2Idx]
            nums2Idx++
        }
        mergedIdx++
    }
    return (isEven) ? ((mergedArr[mergedArr.length - 1] + mergedArr[mergedArr.length - 2])/2) : mergedArr[mergedArr.length - 1]
};

findMedianSortedArrays([1,2],[3,4]) //2.5
//findMedianSortedArrays([1, 12, 15, 26, 34], [2, 13, 17, 30, 45]) //16

