/*You are given a string representing an attendance record for a student. The record only contains the following three 
characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L'
(late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: true
Example 2:
Input: "PPALLL"
Output: false
 */
 
var checkRecord = function(s) {
    var noOfA = 0
    var noOfL = 0
    for(var i = 0; i < s.length; i++){
        if(s[i] == 'A') noOfA += 1
        if(s[i] == 'L'){
            noOfL += 1
        }else{
            noOfL = 0
        }
        
        if(noOfA > 1 || noOfL > 2) return false
    }
    return true
};

checkRecord("PPALLL") //false
