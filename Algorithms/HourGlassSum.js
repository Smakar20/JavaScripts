//Calculate the hourglass sum for every hourglass in an 2D array, then print the maximum hourglass sum.
/*
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

-------
a b c
  d
e f g

*/
function HourGlass(matrix)
{
	this.matrix = matrix;
	this.checkMatrix = function(){
		var i = 0;
		while(i < this.matrix.length)
		{
			if(this.matrix.length !== this.matrix[i].length)
			{
				return false;
			}
			i += 1;
		}
		return true;
	}
	this.greaterHourGlass = function(){
		if(!this.checkMatrix())
		return "It's not a square matrix";
		this.greaterHourGlassSum = 0;
		var hourGlassSum = 0;
		for(var i = 0; i< this.matrix.length-2; i++)
		{
			for(var j = 0; j< this.matrix.length-2; j ++)
			{
				hourGlassSum = matrix[i][j]+matrix[i][j+1]+matrix[i][j+2]+matrix[i+1][j+1]+matrix[i+2][j]+matrix[i+2][j+1]+matrix[i+2][j+2];
				if(this.greaterHourGlassSum < hourGlassSum)
				{
					this.greaterHourGlassSum = hourGlassSum;
				}
				
			}
		}
	return this.greaterHourGlassSum;
	}
}

// ------- test ----------//
var matrix = [[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]];
var hourGlass = new HourGlass(matrix);
console.log(hourGlass.greaterHourGlass())
