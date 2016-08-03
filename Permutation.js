function permutation(arr)
{
	var outputArr = [];
	if(arr.length == 1)
	{
		outputArr.push(arr);
		return outputArr;
	}
	var tempArr = permutation(arr.slice(1));
	tempArr.forEach(function(temp){
		
		for(var i=0;i<=temp.length;i++)
		{
			var tempDup = temp.slice();
			tempDup.splice(i,0,arr[0]);
			outputArr.push(tempDup);
		}
	});
	return outputArr;
}


permutation(["a","b","c"]);
/*
[ [ 'a', 'b', 'c' ],
  [ 'b', 'a', 'c' ],
  [ 'b', 'c', 'a' ],
  [ 'a', 'c', 'b' ],
  [ 'c', 'a', 'b' ],
  [ 'c', 'b', 'a' ] ]
*/