/*Write a program to find the n-th ugly number.
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of 
the first 10 ugly numbers.
Note that 1 is typically treated as an ugly number, and n does not exceed 1690.
*/
var nthUglyNumber = function(n) {
    if(n > 1690) return
    var ugly = [] 
    var i2 = 0, i3 = 0, i5 = 0
    var next_multiple_of_2 = 2,
     next_multiple_of_3 = 3,
     next_multiple_of_5 = 5,
     next_ugly_no = 1
 
    ugly[0] = 1;
    for (var i=1; i<n; i++)
    {
       next_ugly_no = Math.min(next_multiple_of_2,
                           Math.min(next_multiple_of_3,
                               next_multiple_of_5))
       ugly[i] = next_ugly_no
       if (next_ugly_no == next_multiple_of_2)
       {
           i2 = i2+1
           next_multiple_of_2 = ugly[i2]*2
       }
       if (next_ugly_no == next_multiple_of_3)
       {
           i3 = i3+1
           next_multiple_of_3 = ugly[i3]*3
       }
       if (next_ugly_no == next_multiple_of_5)
       {
           i5 = i5+1
           next_multiple_of_5 = ugly[i5]*5
       }
    }
    return next_ugly_no
}


//------- test ---------
nthUglyNumber(11) //15
