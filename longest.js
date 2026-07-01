/*Write a JavaScript function called findLongestWord that takes a sentence 
(string) as input and determines the length of the longest word within the sentence.*/

function findLongestWord(sentence) {
		// Write your code here
    const words = sentence.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

// Do not modify the below lines
module.exports = { findLongestWord };

 EXPLANATION: Use for...of when you only need the values in an array. Use a normal for loop when you also need the index.

function findLongestWord(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Store the maximum length
    let maxLength = 0;

    // Loop through each word
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    return maxLength;
}

// Do not modify the below lines
module.exports = { findLongestWord };

op: "The quick brown fox jumped over the lazy dog"
 answer: 6 

