// Write a function to return a line of text padded with spaces, given a length and a string.
//
// The following conditions should hold:
// • The line should be padded with spaces so that the line has non-whitespace as the first and last character.
// • The line is exactly as many characters long as specified as the length.
// • Padding spaces should be inserted such that they are as evenly distributed as possible among all word breaks.
//
//// Example:
//
// padSpaces(50, "Hello world, it is a good day today.") 
//
// Might return:
//
// Hello   world,   it   is   a   good   day   today.

function padSpaces(finalLen, str){
    var output = '';
    
    var lenDiff = finalLen - str.length;
    var strArr = str.split(' ');
    var addSpaces = Math.round(lenDiff/(strArr.length-1));
    totalSpace = addSpaces * (strArr.length-1);
    var diff = lenDiff - totalSpace;

    output += strArr[0];
    
    var arrSpace = [];

    for(var i = 0; i < strArr.length - 1; i++){
      arrSpace.push(add(addSpaces));
    }

    if (diff !== 0){
      var j = 0;
      while (j < diff){
        arrSpace[j] = arrSpace[j] + ' ';
        j++;
      }
    }
    
    for(var i = 1; i < strArr.length; i++){
       output += arrSpace[i-1] + ' ';
       output += strArr[i];
        
    }
    return output;  
}

function add(spa){
    var i = 0;
    var output = '';
    while (i < spa){
        output += ' ';
        i++;
    }
    return output;
}

//---------------------------------------------------
padSpaces(50, "Hello world, it is a good day today.") // 'Hello   world,   it   is   a   good   day   today.';
