/*Have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements 
and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a 
Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] 
then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is 
equal to the width * height.*/

(function RectangleArea(strArr) {
    var x1 = 0, y1 = 0, x2 = 0, y2 = 0
    for(var i = 0; i < strArr.length; i++){
        var arr = strArr[i].slice(1, strArr[i].length - 1).split(' ')
        if(i == 0){
            x1 = Number(arr[0])
            y1 = Number(arr[1])
        }
        else{
            if(x1 != arr[0]) x2 = Number(arr[0])
            if(y1 != arr[1]) y2 = Number(arr[1])
        }
    }
    return Math.abs(x2 - x1) * Math.abs(y2 - y1)
}(["(0 0)","(1 0)","(1 1)","(0 1)"])) // 1
