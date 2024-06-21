/**Question 4: Design a function that determines whether a given string is a pangram. A
pangram is a sentence or phrase containing every letter of the alphabet at
least once. Punctuation and case are typically ignored. For example, the
string "The quick brown fox jumps over the lazy dog" is a pangram, while
"Hello, world!" is not. */

function findPangram(input) {
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // Create an array to store the letters
    const letters = [];

    // Convert input to lowercase and loop through each character
    input.toLowerCase().split('').forEach(char => {
        // Check if the character is a letter and not already in the array
        if (alphabet.includes(char) && !letters.includes(char)) {
            letters.push(char);
        }
    });

    // Check if the array contains all the letters of the alphabet
    if (letters.length === 26) {
        return "It is a pangram";
    } else {
        return "It is not a pangram";
    }
}
