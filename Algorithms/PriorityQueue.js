function PriorityQueue()
{
	
}
PriorityQueue.prototype.head = null;

PriorityQueue.prototype.Node = function(val,next){
	this.val = val;
	this.next = next;
}

PriorityQueue.prototype.deque = function(){
		if(PriorityQueue.prototype.head !== null)
		{
			var current = PriorityQueue.prototype.head;
			PriorityQueue.prototype.head = PriorityQueue.prototype.head.next;
			return current.val;
		}
		else
		{
			return "Can not deque";
		}
	}

PriorityQueue.prototype.print = function(){
			var current = PriorityQueue.prototype.head;
			while(current!==null)
			{
				console.log(current.val);
				current = current.next;
			}
	}	
	
function MinQueue(val)
{
	this.enque = function(val){
		var newNode = new PriorityQueue.prototype.Node(val, null);
		if(PriorityQueue.prototype.head===null)
		{
			PriorityQueue.prototype.head = newNode;
		}
		else
		{
			var previous = null;
			var current = PriorityQueue.prototype.head;
			while(current!==null)
			{
				if(current.val > newNode.val)
				{
					//insert element
					if(previous !== null)
					{
						previous.next = newNode;
					}
					else
					{
						previous = newNode;
						PriorityQueue.prototype.head = previous;
					}
					newNode.next = current;
					break;
				}

				previous = current;
				current = current.next;
			}
			//inserting at the end
			if(current === null)
			{
				previous.next = newNode;	
			}
		}
	}	
}

function MaxQueue(val)
{
	this.enque = function(val){
		var newNode = new PriorityQueue.prototype.Node(val, null);
		if(PriorityQueue.prototype.head===null)
		{
			PriorityQueue.prototype.head = newNode;
		}
		else
		{
			var previous = null;
			var current = PriorityQueue.prototype.head;
			while(current!==null)
			{
				if(current.val < newNode.val)
				{
					//insert element
					if(previous !== null)
					{
						previous.next = newNode;
					}
					else
					{
						previous = newNode;
						PriorityQueue.prototype.head = previous;
					}
					newNode.next = current;
					break;
				}

				previous = current;
				current = current.next;
			}
			//inserting at the end
			if(current === null)
			{
				previous.next = newNode;	
			}
		}
	}	
}

//// ------ test --------- ////
MinQueue.prototype = new PriorityQueue();
MaxQueue.prototype = new PriorityQueue();

var minQueue = new MinQueue();
minQueue.enque(5);
minQueue.enque(2);
minQueue.enque(0);
minQueue.print();
console.log("min ends");
PriorityQueue.prototype.head = null;
var maxQueue = new MaxQueue();
maxQueue.enque(5);
maxQueue.enque(6);
maxQueue.enque(8);
maxQueue.print();
console.log("max ends");
