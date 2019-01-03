/* 
We want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

input: user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
output: {
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}*/

(function convertQueryToMap(str) {
  if (str === null || str.length === 0) return {};
  var flds = str.split('&');
  var output = {};
  for (var fld of flds){
    var arr = fld.split('=');
    buildObj(arr[0], output, arr[1]);
  }
  return output;      
})('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue')

function buildObj(str1, obj, str2){
  if(str1.indexOf('.') !== -1){
   if(obj[str1.substr(0, str1.indexOf('.'))] === undefined){
     obj[str1.substr(0, str1.indexOf('.'))] = {};
   }
   buildObj(str1.substr(str1.indexOf('.')+1), obj[str1.substr(0, str1.indexOf('.'))], str2);
  }else {
    obj[str1] = decodeURIComponent(str2);
  }
  return obj;
}
