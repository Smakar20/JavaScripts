/*You will be given a string with brackets and an index of an opening bracket and your task will be to return the index of 
the matching closing bracket. Return -1 if there is no answer. An opening brace will always have a closing brace.*/

function solve(str, indx){
  var bracMatcher = []
  for(var i = 0; i < str.length; i++){
      if(str[i] == '(') bracMatcher.push(i)
      
      if(str[i] == ')' && bracMatcher.length != 0){
         if(bracMatcher[bracMatcher.length - 1] == indx) return i
         bracMatcher.pop()
      }
  }
  return -1
}

//solve("((1)23(45))(aB)", 0) // 10 -- the opening brace at index 0 matches the closing brace at index 10
//solve("((1)23(45))(aB)", 1) //3 
//solve("((1)23(45))(aB)", 2) // -1 -- there is no opening bracket at index 2, so return -1
//solve("((1)23(45))(aB)", 6) // 9
//solve("((1)23(45))(aB)", 11) // 14
//solve("((>)|?(*'))(yZ)", 11) // 14
