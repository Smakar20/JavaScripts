/*Write a program that, given a positive integer M and a list of integers L, outputs 
the list element M links away from the end of the list. For this program, we will 
use 1-indexing. That means mth_to_last(1) is the "1st-to-last" element, or simply 
the last element in the list.*/
function processData(input) {
    var temp = "";
    var head = "";
    var position = Number(input.split(",")[0]);
    var str = input.split(",")[1];
    var temp_str = "";
    var firstFound = false;
    var counter = 0;
    
    for(i=str.length-1;i>=0;i--)
        {
            if(str[i] !=" ")
                {
                    temp_str += str[i];
                }
            else
                {
                    if(!firstFound)
                    {
                     temp = new Node(Number(temp_str.split('').reverse().join('')),null);
                     firstFound = true;
                    } 
                 else
                    {
                     temp = new Node(Number(temp_str.split('').reverse().join('')),temp);
                    }
                    temp_str = "";
                    counter += 1;
                }
            
            if(counter == position)
                {
                    console.log(temp.val);
                    return;
                }
        }
    
    if(counter < position || position < 0)
        {
             console.log("NIL");
             return;
        }
    
    /*head = temp;
    
    var fastPointer = head;
    var lastPointer = head;
    for(i=1;i<=position;i++)
        {
            if(fastPointer != null)
                {
                    fastPointer = fastPointer.next;
                }
        }
    while(fastPointer != null)
        {
            fastPointer = fastPointer.next;
            lastPointer = lastPointer.next;
        }
    console.log(lastPointer.val);*/
} 

function Node(val, next)
{
  this.val = val;
  this.next = next;
}

////////////////test//////////////

processData("4,10 200 3 40000 5");
//200