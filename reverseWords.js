/**Question 6: Master Yoda, a renowned Jedi Master from the Star Wars universe, is known
for his unique way of speaking. He often reverses the order of words in his
sentences. For example, instead of saying "I am home" he might say "Home
am I" Design a function that takes a sentence as input and returns a new
sentence with the words reversed in the same order that Master Yoda would
use. */

function reverseWords(input){
    //split the input into an array of words
    let words = input.split(' ');
    //reverse the array
    let reversedWords = words.reverse();
    //join the array back into a string
    return reversedWords.join(' ');
}

