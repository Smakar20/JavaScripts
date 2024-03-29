function Person(){
	this.age = 10;
}

Person.prototype.getAge = function(){

	return `my age is ${this.age}`;
}

var foo = {'age': 20};

var p = new Person();

// ----------------------

console.log(p.getAge()); // 'my age is 10'
console.log(p.getAge.call(foo)); // 'my age is 20'
console.log(p.getAge.apply(foo)); // 'my age is 20'
console.log(p.getAge.bind(foo)()); // 'my age is 20'

/*

The bind() method creates a new function that, when called, has its this keyword set to the provided value.

The main differences between bind() and call() is that the call() method:

1. Accepts additional parameters as well
2. Executes the function it was called upon right away.
3. The call() method does not make a copy of the function it is being called on.

call() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all parameters to be passed in individually, whereas apply() expects an array of all of our parameters. 
*/

//--------------------------------------------------------------------
/*
Write your own myCall, myApply and myBind functions.
*/

Function.prototype.myCall = function(thisContext, ...args) {
// 'this' is the original function inside this function.
// in order to have 'thisContext' be the 'this' context of the original function, we set the function (this) 
// to be a value on 'thiscontext' object, and we can use a symbol to prevent any key collision on 'thisContext'
// as symbol guaranties unique key.	
  const symbol = Symbol();
  thisContext[symbol] = this;
  const result = thisContext[symbol](...args);
  delete thisContext[symbol];
  return result;
};

Function.prototype.myApply = function(thisContext, args = []) {
// in this function 'this' is the original function	
  return this.myCall(thisContext, ...args);
};


Function.prototype.myBind = function(thisContext, ...args) {
  const self = this;
  return function (...args2) {
    return self.myApply(thisContext, [...args, ...args2]);
  }
};
