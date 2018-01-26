// iterate on column fashion.
/*
input
[
[1, 2, 3, 4],
[10, 20, 30, 40],
[100, 200, 300, 400]
]

output 
should be like an iterator on 
1, 10, 100, 2, 20, 200, 3, 30, 300, 4, 40, 400
*/


function columnWiseIterator(input){
  var output=[]
  // imagine input to be a queue
  while(input.length > 0) {
    // remove the head element of the queue
    var itr = input.shift()
    // each iterator in the input has functions hasNext and next
    // in JS we do not have hasNext so we will just live with next
    var next = itr.next().value
    if (next != undefined) {
      output.push(next)
      // put the itr back at the end of the queue
      input.push(itr)
    }
    
  }
  
  return output[Symbol.iterator]()
}

function print(itr){
  var next = itr.next().value
  while(next != undefined){
    console.log(next)
    next = itr.next().value
  }
}

var arr1 = [1, 2, 3, 4]
var arr2 = [10, 20, 30, 40]
var arr3 = [100, 200, 300, 400]

print(
  columnWiseIterator(
    [ arr1[Symbol.iterator](), 
      arr2[Symbol.iterator](), 
      arr3[Symbol.iterator](),
    ]
  )
)

