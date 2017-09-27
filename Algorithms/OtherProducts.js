/*Have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the products of all 
the other numbers in the array for each element. For example: if arr is [1, 2, 3, 4, 5] then the new array, where each 
location in the new array is the product of all other elements, is [120, 60, 40, 30, 24]. The following calculations were 
performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should generate this new array and 
then return the numbers as a string joined by a hyphen: 120-60-40-30-24. The array will contain at most 10 elements and at 
least 1 element of only positive integers.*/

(function OtherProducts(arr) { 
    var prodArr = []
    for(var i = 0; i < arr.length; i++){
        prodArr.push(arr.slice(0, i).concat(arr.slice(i + 1, arr.length)).reduce((n1, n2)=>{
          return n1 * n2  
        },1))
    }
    return prodArr.join("-")
}([3,1,2,6])) // '12-36-18-6'
