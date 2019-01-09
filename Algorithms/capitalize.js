/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. 
Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']*/

function capitalize(s){
  if (s === undefined || s.length === 0) return [];
  var evenCap= '';
  var oddCap = '';
  for (var i = 0; i < s.length; i++){
    if (i === 0 || i%2 == 0){
      evenCap += s[i].toUpperCase();
      oddCap += s[i];
    }
    else {
      evenCap += s[i];
      oddCap += s[i].toUpperCase();
    }
  }
  
  return [evenCap, oddCap];
};

