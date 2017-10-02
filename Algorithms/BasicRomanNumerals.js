/*Have the function BasicRomanNumerals(str) read str which will be a string of Roman numerals. The numerals being used are: 
I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. In Roman numerals, to create a number like 11 you 
simply add a 1 after the 10, so you get XI. But to create a number like 19, you use the subtraction notation which is to add 
an I before an X or V (or add an X before an L or C). So 19 in Roman numerals is XIX. 

The goal of your program is to return the decimal equivalent of the Roman numeral given. For example: if str is "XXIV" your 
program should return 24 */

(function BasicRomanNumerals(str) {
    var sum = 0
    var obj = {'I': 1,
               'V': 5,
               'X': 10,
               'L': 50,
               'C': 100,
               'D': 500,
               'M': 1000
    }
    for(var i = 0; i < str.length; i++){
        if((str[i] == 'I' && str[i+1] == 'V') || (str[i] == 'I' && str[i+1] == 'X')){
            sum += -1
        }
        else if((str[i] == 'X' && str[i+1] == 'L') || (str[i] == 'X' && str[i+1] == 'C')){
            sum += -10
        }
        else if((str[i] == 'C' && str[i+1] == 'D') || (str[i] == 'C' && str[i+1] == 'M')){
            sum += -100
        }
        else{
            sum += obj[str[i]]
        }
    }
    return sum
}('XCVI')) //96
