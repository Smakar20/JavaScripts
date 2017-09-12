/*Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well. 

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.*/

(function QuestionsMarks(str) {
    let num1 = 0,
    foundNum = false,
    question = 0,
    pair = 0
    for(let i=0; i<str.length;i++){
        if(foundNum && str[i] == '?'){
            question++
            continue
        }
        if(str[i].match(/[0-9]/g)){
            foundNum = true
            if(num1 != 0 && (num1 + Number(str[i]) == 10 && question != 3)) return 'false'
            if(num1 + Number(str[i]) == 10 && question == 3) pair++
            num1 = Number(str[i])
            question = 0
        }
    }
  return (pair == 0) ? "false" : "true"
}("acc?7??sss?3rr1??????5"))
