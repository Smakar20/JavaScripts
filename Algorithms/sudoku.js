//sudoku Checker
function sudoku(arr)
{
	if(!checkMatrix(arr))
	{
		return false;
	}
	var k = 0;
	while(k < arr.length)
	{
		var column = [];
		var row = [];
		for(var i = 0; i < arr.length; i++)
		{
			var columnNum = arr[k][i];
			var rowNum = arr[i][k];
			
			if(columnNum === 0 || rowNum === 0)
			{
				return false;
			}
			
			for(var j = 0; j < column.length; j++)
			{
				if(columnNum === column[j] || rowNum === row[j])
				{
					return false;
				}
			}
			column.push(columnNum);
			row.push(rowNum);
		}
		k++;
	}
	
	var found = false;
	for(var i = 0; i< arr.length; i += 3)
	{
		for(var j = 0; j< arr.length; j += 3)
		{
			found = subMatrix(arr,i,j);
			if(!found)
			{
				return false;
			}
		}
	}
	
	return true;
}

function subMatrix(matrix,x,y)
{
	var foundElements = [];
	for(var i = x; i< x+3; i++)
	{
		for(var j = y; j< y+3; j++)
		{
			for(var n = 0; n< foundElements.length; n++)
			{
				if(matrix[i][j] === foundElements[n])
				{
					return false;
				}
				foundElements.push(matrix[i][j]);
			}
		}
	}
	return true;
}

function checkMatrix(matrix)
{
	if(matrix.length !==9)
	{
		return false;
	}
	for(var i = 0; i< matrix.length; i++)
	{
		if(matrix[i].length !== 9)
		{
			return false;
		}
	}
	return true;
}

var test = [[8,3,5,4,1,6,9,2,7],
 [2,9,6,8,5,7,4,3,1],
 [4,1,7,2,9,3,6,5,8],
 [5,6,9,1,3,4,7,8,2],
 [1,2,3,6,7,8,5,4,9],
 [7,4,8,5,2,9,1,6,3],
 [6,5,2,7,8,1,3,9,4],
 [9,8,1,3,4,5,2,7,6],
 [3,7,4,9,6,2,8,1,5]];

console.log(sudoku(test));