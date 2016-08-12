function bracketMatcher(str)
{
	var tempArr = [];
	var count = 0;
	str.split("").forEach(function(char){
		if(char == "(" || char == "{" || char == "[")
		{
			tempArr.push(char);
		}
		else
		{
			if((char == ")" && tempArr[tempArr.length-1] == "(") || (char == "}" && tempArr[tempArr.length-1] == "{") || (char == "]" && tempArr[tempArr.length-1] == "["))
			{
				tempArr.pop();
			}
			else
			{
				count += 1;
			}
		}
	});
	if(tempArr.length != 0 || count != 0)
	{
		return false;
	}
	return true;
}

//test
bracketMatcher("[]{{}}()"); //true