//Find Absolute diagonal sum difference of a square matrix.
function MartixAbsSum(matrix)
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

	this.matrixSum = function(){
		if(!this.checkMatrix())
		{
			return "Can not calculate absolute sum";
		}
		this.diagonalSum1 = 0;
		this.diagonalSum2 = 0;
		for(var i=0;i<this.matrix.length;i++)
		{
			this.diagonalSum1 += matrix[i][i];
			this.diagonalSum2 += matrix[matrix.length-1-i][i];
		}
		return Math.abs(this.diagonalSum1-this.diagonalSum2);
	}
}

var matrix=[[5,2,3],
			[3,4,5],
			[5,6,7]];
var calMatrixSum = new MartixAbsSum(matrix)
console.log(calMatrixSum.matrixSum())
