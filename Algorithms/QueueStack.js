//Queue and Stack implementation.
function List() {
}

List.prototype.head = null;
List.prototype.tail = null;
List.prototype.Node = function Node(val, next)
					{
						this.val = val;
						this.next = next;
					}

List.prototype.print = function(){
			var current = List.prototype.head;
			while(current!==null)
			{
				console.log(current.val);
				current = current.next;
			}
		}
		
List.prototype.deque = function(){
			var current = null;
			if(List.prototype.head !== null)
			{
				current = List.prototype.head;
				List.prototype.head = List.prototype.head.next;
				return current.val;
			}
			else
			{
				return "can not deque, queue is empty.";
			}
		}

//implementing queue
function Queue(){
		this.enque = function(val){
			var current = new List.prototype.Node(val,null);
			if(List.prototype.head === null)
			{
				List.prototype.head = current;
			}
			else
			{
				List.prototype.tail.next = current;
			}
			List.prototype.tail = current;
		}
}
//implementing stack
function Stack(){
	this.push = function(val){
		if(List.prototype.head === null)
			{
				List.prototype.head = new List.prototype.Node(val,null);
			}
		else
			{
				var current = List.prototype.head;
				List.prototype.head = new List.prototype.Node(val,current);
			}	
	}
}


//////------ result -------/////
Queue.prototype = new List(); // The class extension
var queue = new Queue();
queue.enque(2);
queue.enque(1);
queue.enque(4);
queue.print();
queue.deque();
console.log("Dequing...");
queue.print();
console.log("-----Checking Stack----");
List.prototype.head = null;
List.prototype.tail = null;
Stack.prototype = new List(); // The class extension
var stack = new Stack();
stack.push(2);
stack.push(1);
stack.push(4);
stack.print();
stack.deque();
console.log("Dequing...");
stack.print();
