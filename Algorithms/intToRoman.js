/*Integer to roman.*/

var intToRoman = function(num) {
    if(num == 0) return
    var output = ''
    while(num != 0){
        if(num >= 1000){
            output += buildStr(parseInt(num/1000), 'M')
            num = num%1000
        }else if(num >= 900){
            output += buildStr(parseInt(num/900), 'CM')
            num = num%900
        }else if(num >= 500){
            output += buildStr(parseInt(num/500), 'D')
            num = num%500
        }else if(num >= 400){
            output += buildStr(parseInt(num/400), 'CD')
            num = num%400
        }else if(num >= 100){
            output += buildStr(parseInt(num/100), 'C')
            num = num%100
        }else if(num >= 90){
            output += buildStr(parseInt(num/90), 'XC')
            num = num%90
        }else if(num >= 50){
            output += buildStr(parseInt(num/50), 'L')
            num = num%50
        }else if(num >= 40){
            output += buildStr(parseInt(num/40), 'XL')
            num = num%40
        }else if(num >= 10){
            output += buildStr(parseInt(num/10), 'X')
            num = num%10
        }else if(num == 9){
            output += buildStr(num/9, 'IX')
            break
        }else if(num >= 5){
            output += buildStr(parseInt(num/5), 'V')
            num = num%5
        }else if(num == 4){
            output += buildStr(num/4, 'IV')
            break
        }else{
            output += buildStr(num, 'I')
            break
        }
    }
    return output
};

function buildStr(n, str){
    var output = ''
    for(var i = 0; i < n; i++){
        output += str
    }
    return output
}

intToRoman(41) //'XLI'
