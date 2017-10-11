class Mathematic {
  constructor(){
    this.total = 0
  }
  
  sum(nums){
    var numArr = []
    numArr = Array.isArray(nums) ? nums : Object.values(arguments)
    var sum = 0
    for(var i of numArr){
      if(isNaN(i)) return 'Not a valid input'
      sum += Number(i)
    }
    this.total = sum
    return sum
  }
  
  add(num){
    this.total += num
    return this.total
  }
  
  sub(num){
    this.total -= num
    return this.total
  }
  
  prod(num){
    this.total = (this.total == 0) ? num : this.total * num
    return this.total
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
}
