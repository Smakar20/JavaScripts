class Mathematic {
  constructor(){
  }
  
  add(nums){
    var numArr = []
    numArr = Array.isArray(nums) ? nums : Object.values(arguments)
    var sum = 0
    for(var i of numArr){
      if(isNaN(i)) return 'Not a valid input'
      sum += Number(i)
    }
    return sum
  }
  
  sub(nums){
    var numArr = []
    numArr = Array.isArray(nums) ? nums : Object.values(arguments)
    var sum = 0
    for(var i of numArr){
      if(isNaN(i)) return 'Not a valid input'
      
      sum = (sum == 0) ? Number(i) : sum - Number(i)
    }
    return sum
  }
  
  prod(nums){
    var numArr = []
    numArr = Array.isArray(nums) ? nums : Object.values(arguments)
    var prod = 1
    for(var i of numArr){
      if(isNaN(i)) return 'Not a valid input'
      prod *= Number(i)
    }
    return prod
  }
  
  avg(nums){
    var numArr = []
    numArr = Array.isArray(nums) ? nums : Object.values(arguments)
    return numArr.reduce((num1,num2)=>{
      return num1 + num2
    },0)/numArr.length
  }
  
  sort(nums){
    var numArr = []
    numArr = Array.isArray(nums) ? nums : Object.values(arguments)
    return numArr.sort((num1,num2)=>{
      return num1 - num2
    })
  }
  
  min(nums){
    var numArr = []
    numArr = Array.isArray(nums) ? nums : Object.values(arguments)
    return this.sort(numArr)[0]
  }
  
  max(nums){
    var numArr = []
    numArr = Array.isArray(nums) ? nums : Object.values(arguments)
    return this.sort(numArr)[numArr.length - 1]
  }
  
  median(nums){
    var numArr = []
    numArr = Array.isArray(nums) ? nums : Object.values(arguments)
    var sortedArr = this.sort(numArr)
    return (sortedArr.length%2 != 0) ? sortedArr[Math.floor(sortedArr.length/2)] : (sortedArr[Math.floor(sortedArr.length/2)] + sortedArr[Math.floor(sortedArr.length/2) - 1])/2
  }
}

module.exports = Mathematic
