/**Question 2: Write a recursive function to calculate the factorial of a number */

function factorial(number){
    //handle non-negative integers
    if(number < 0){
        return "Error: Factorial is not defined for negative numbers";

    }
    //base case
    else if(number === 0 || number === 1){
        return 1;
    }
    //recursion
    else{
        return number * factorial(number - 1);
    }
}
console.log(factorial(3));
