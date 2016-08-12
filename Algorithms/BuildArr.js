//replace only "?" with "0" and "1" and build an array.
function BuildArr(str)
{
	var permArr = [];
	str.split("").forEach(function(ch){
		if(ch !== "?" && permArr.length === 0)
		{
			permArr.push(ch);
		}
		else
		{
			if(permArr.length === 0 && ch === "?")
			{
				permArr.push("0");
				permArr.push("1");
			}
			else
			{
				var tempArr = permArr.slice();
				permArr = [];
				tempArr.forEach(function(ele){
					if(ch === "?")
					{
						permArr.push(ele+"0");
						permArr.push(ele+"1");
					}
					else
					{
						ele += ch;
						permArr.push(ele);
					}
				});
			}
		}
	});
	return permArr;
}

BuildArr("1?01?")
//[ '10010', '10011', '11010', '11011' ]