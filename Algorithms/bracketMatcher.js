/*Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.*/

//method 1

(function isValid(s) {
    var bracArr = []
    for(var i = 0; i < s.length; i++){
        if(bracArr.length ==0 && (s[i] == ')' || s[i] == '}' || s[i] == ']')) return false 
        if((s[i] == ')' && bracArr[bracArr.length-1] == '(') || (s[i] == '}' && bracArr[bracArr.length-1] == '{') || (s[i] == ']' && bracArr[bracArr.length-1] == '[')){
           bracArr.pop() 
        }else{
            bracArr.push(s[i])
        }
    }
    if(bracArr.length != 0) return false
    return true
})('(])') //false

//method 2

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
