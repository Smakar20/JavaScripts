/*Determine whether an integer is a palindrome. Do this without extra space.*/

var isPalindrome = function(x) {
    if(x < 0) return false
    if(x ==0 || x == 1) return true
    var val = 1
    while(x/val > 10){
        val = val * 10
    }
    
    while(x > 0){
        if(Math.floor(x/val) == x%10){
           x = Math.floor((x%val)/10)
           val = Math.floor(val/100)
        }else{
            return false
        }
    }
    return true
}

isPalindrome(311) // false
