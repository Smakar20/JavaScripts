/*Have the function CommandLine(str) take the str parameter being passed which represents the parameters given to a command in 
an old PDP system. The parameters are alphanumeric tokens (without spaces) followed by an equal sign and by their corresponding
value. Multiple parameters/value pairs can be placed on the command line with a single space between each pair. Parameter 
tokens and values cannot contain equal signs but values can contain spaces. The purpose of the function is to isolate the 
parameters and values to return a list of parameter and value lengths. It must provide its result in the same format and in 
the same order by replacing each entry (tokens and values) by its corresponding length. 

For example, if str is: "SampleNumber=3234 provider=Dr. M. Welby patient=John Smith priority=High" then your function should 
return the string "12=4 8=12 7=10 8=4" because "SampleNumber" is a 12 character token with a 4 character value ("3234") 
followed by "provider" which is an 8 character token followed by a 12 character value ("Dr. M. Welby"), etc. */

(function CommandLine(str) { 
     var charArr = str.split('=')
     var leftChar = charArr[0],
     output = []
     for(var i = 1; i < charArr.length; i++){
       var eleArr = charArr[i].split(' '),
       temp = (eleArr.length == 1 || i == charArr.length - 1) ? eleArr.slice().join(' ') : eleArr.slice(0,eleArr.length-1).join(' ')
       var outputStr = `${leftChar.length}=${temp.length}`
       output.push(outputStr)
       leftChar = eleArr[eleArr.length - 1]
     }
     return output.join(' ')
})("code=3320 date=2017/09/19 value=42 name=H G T T G") //'4=4 4=10 5=2 4=9'
//("a=3 b=4 a=23 b=a 4 23 c=") //'1=1 1=1 1=2 1=6 1=0'

//("origin=2;3 destination=7;9 stops= 3;6 8;9 12;17") //'6=3 11=3 5=14'
