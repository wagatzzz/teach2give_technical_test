/**Question 3: Design a function that takes a string or sequence of characters as input and
returns the character that appears most frequently.
//Eg 11189 => '1'
//hello => l */

function findMostFrequentCharacter(input){

    //create an object to store the character counts
    let characterCount = {};

    //loop theougth the input to count each character
    for(let i = 0; i < input.length; i++){
        //check if the character is already in the object
        if(characterCount[input[i]]){
            //increment the count
            characterCount[input[i]] += 1;
        }else{
            //initialize the count
            characterCount[input[i]] = 1;
        }
    }
    
    //keep track of the most frequent character
    let mostFrequentCharacter = '';
    let highestCount = 0;

    //loop through the object to find the most frequent character
    for(let key in characterCount){
        if(characterCount[key] > highestCount){
            highestCount = characterCount[key];
            mostFrequentCharacter = key;
        }
    }
    return mostFrequentCharacter;
}