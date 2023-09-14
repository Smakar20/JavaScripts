/*
A cafeteria table consists of a row of 
�
N seats, numbered from 
1
1 to 
�
N from left to right. Social distancing guidelines require that every diner be seated such that 
�
K seats to their left and 
�
K seats to their right (or all the remaining seats to that side if there are fewer than 
�
K) remain empty.
There are currently 
�
M diners seated at the table, the 
�
ith of whom is in seat 
�
�
S 
i
​
 . No two diners are sitting in the same seat, and the social distancing guidelines are satisfied.
Determine the maximum number of additional diners who can potentially sit at the table without social distancing guidelines being violated for any new or existing diners, assuming that the existing diners cannot move and that the additional diners will cooperate to maximize how many of them can sit down.
Please take care to write a solution which runs within the time limit.
Constraints
1
≤
�
≤
1
0
1
5
1≤N≤10 
15
 
1
≤
�
≤
�
1≤K≤N
1
≤
�
≤
5
0
0
,
0
0
0
1≤M≤500,000
�
≤
�
M≤N
1
≤
�
�
≤
�
1≤S 
i
​
 ≤N
Sample test case #1
N = 10
K = 1
M = 2
S = [2, 6]
Expected Return Value = 3
Sample test case #2
N = 15
K = 2
M = 3
S = [11, 6, 14]
Expected Return Value = 1
Sample Explanation
In the first case, the cafeteria table has 
�
=
1
0
N=10 seats, with two diners currently at seats 
2
2 and 
6
6 respectively. The table initially looks as follows, with brackets covering the 
�
=
1
K=1 seat to the left and right of each existing diner that may not be taken.
  1 2 3 4 5 6 7 8 9 10
  [   ]   [   ]
Three additional diners may sit at seats 
4
4, 
8
8, and 
1
0
10 without violating the social distancing guidelines.
In the second case, only 
1
1 additional diner is able to join the table, by sitting in any of the first 
3
3 seats.
*/

function getMaxAdditionalDinersCount(N, K, M, S) {
  S.sort((a, b) => a - b)
    
    let guests = 0;
    let start = 1;
    let range = null;

    for (const seatedDiner of S) {
        range = seatedDiner - start;
        guests += Math.floor(range / (K + 1));
        start = seatedDiner + K + 1;
    }

    range = N - start + 1
    guests += Math.ceil(range / (K + 1))

    return guests
}
