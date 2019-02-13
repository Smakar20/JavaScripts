//  input:  [[1, 3], [2, 4], [3, 5], [7, 9], [14, 16], [13, 15]] 
//  output: [[1, 5], [7, 9], [13, 16]] 

function getOverlap(views){
    var output = [];
    numArr = [];
    var max = Math.max.apply(this,flatten(views));
    for (var i = 0; i <= max; i++){
      numArr.push(false);
    }
    
    for (var view of views){
      for(var i = view[0]; i <= view[1]; i++){
        numArr[i] = true;
      }
    }

    var current = [];
    for (var i = 0; i < numArr.length; i++){
        if(numArr[i] === true){
          if ((current.length === 0) || (numArr[i+1] !== undefined && numArr[i+1] === false)){
            current.push(i);
          }
        }
        if(i === numArr.length - 1){
          current.push(i);
        }

        if(current.length === 2){
          output.push(current.slice());
          current.length = 0;
        }
    }
    return output;
}

function flatten(arr){
   return arr.reduce((s,a)=>{
    s.push(a[0]);
    s.push(a[1]);
    return s;
  },[]);
}


const interval = [[1, 3], [2, 4], [3, 5], [7, 9], [14, 16], [13, 15]];

getOverlap(interval); //[[1, 5], [7, 9], [13, 16]] 
