/**Question 1: Design a function that reverses the digits of an integer. For example, 50
should become 5 and -12 should become -21. */

function reverseInteger(integer) {
    //change number to string
    let stringInteger = integer.toString();
    let isNegative = integer < 0;
    
    // Remove the negative sign so that you can reverse
    if (isNegative) {
        stringInteger = stringInteger.substring(1);
    }
    
    // make them an array then reverse it
    let array = stringInteger.split("");
    array.reverse();
    
    // Convert the reversed array back to a string and then to an integer
    let reversedString = array.join("");
    let reversedInteger = parseInt(reversedString, 10);
    
    // If number was negative, put the negative sign
    if (isNegative) {
        reversedInteger = -reversedInteger;
    }
    
    return reversedInteger;
}

reverseInteger(305);