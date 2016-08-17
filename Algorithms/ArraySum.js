//Given array length and an array with each element of equal length, find the sum of the array elements.
function arrSum(str) {
    var n = parseInt(str.split(",")[0]);
    arr = str.split(",")[1].split(' ');
    arr = arr.map(Number);
    var outputStr = "";
    var carry = 0;
    for(var i = String(arr[0]).length-1; i >= 0; i--)
    {
    	var j=0;
    	var sum = 0;
    	while(j < n)
    	{
    		sum += Number(String(arr[j]).split("")[i]);
    		j += 1;
    	}
    	sum += carry;
    	if(sum > 9)
    	{
    		var tempArr = String(sum).split("");
    		outputStr = tempArr[tempArr.length-1] + outputStr;
    		carry = Number(tempArr.slice(0,tempArr.length-1));
    	}
    	else
    	{
    		outputStr = String(sum) + outputStr;
    		carry = 0;
    	}
    }
    return outputStr;
}

var total = arrSum("5,1000000001 1000000002 1000000003 1000000004 1000000005");

console.log(total); //5000000015 expected
