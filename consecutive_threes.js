/**Question 5: Design a function that takes a list of integers as input. The function should
return True if the list contains two consecutive threes (3 next to a 3) anywhere
within the list. Otherwise, it should return False. For example, the function
should return True for [1, 3, 3] and False for [1, 3, 1, 3]. */

function findConsecutiveThrees(input){
    //iterate over the list
    for(let i = 0; i < input.length - 1; i++){
        //compare if the number in an index and the next number are all 3
        if(input[i] === 3 && input[i + 1]  === 3){
            return true;
        }
    }
    return false
}