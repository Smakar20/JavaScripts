/*
1
1 1
1 2 1 
1 3 3 1
1 4 6 4 1
*/

function triangle(pos)
{
	var arr = [];
	pos = Number(pos);
	if(pos <= 0) return "NIL";
	for(i=0;i<pos;i++)
	{
		tempArr = [];
		for(j=0;j<i+1;j++)
		{
			if (i==j)
			{
				tempArr.push(1);
			}
			else
			{
				tempArr.push(getPrevious(arr[arr.length-1],j) + getPrevious(arr[arr.length-1],j-1));
			}
		}
		arr.push(tempArr);
	}
	return arr;
}

function getPrevious(arr, idx)
{
	if(idx < 0 || idx > arr.length-1) 	return 0;
	return arr[idx];
}

//alternate method:
function TriangleRow(num) { 
    var arr = []
    for(var i = 0; i <= num; i++){
        if(i == 0){
            arr.push([1])
            continue
        }
        var temp = arr[arr.length - 1]
        arr[i] = []
        for(var j = 0; j <= temp.length; j++){
            if(j == 0 || j == temp.length){
                arr[i][j] = 1
            }
            else{
                arr[i][j] = temp[j-1] + temp[j] 
            }
        }
    }
    return arr
}

//test the function
triangle(6);
