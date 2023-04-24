/*
Create a function to convert snake_case to camcelCase.

snakeToCamel('snake_case') 
// 'snakeCase'
snakeToCamel('is_flag_on') 
// 'isFlagOn'
snakeToCamel('is_IOS_or_Android') 
// 'isIOSOrAndroid'
snakeToCamel('_first_underscore') 
// '_firstUnderscore'
snakeToCamel('last_underscore_') 
// 'lastUnderscore_'
snakeToCamel('_double__underscore_') 
// '_double__underscore_'
*/

function snakeToCamel(str) {
  let result = str[0]; // in any case we want to keep first char as it is

  for(let i = 1; i < str.length; i++) { // begin from i=1 as we already have 0th index char

    /** main logic: Details explanation is coming soon.
    1. current char `i` must be '_'
    2. previous char must not be '_'
    3. next char must not be '_'
    4. current char must less than 2nd last of string
    **/
    if(str[i] == '_' && str[i-1] != '_' && str[i+1] != '_' && i < str.length - 1) {
      result += str[i+1].toUpperCase();
      i++; // increment because we already consider i+1 in previous line.
    } else {
      result += str[i]; // else just add in the result string
    }
  }
  return result;
}
