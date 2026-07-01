/*Write a JavaScript function called titleCase which accepts a sentence 
(string) as input and transforms it into title case.*/
function titleCase(sentence) {
		// write your code here
    const words = sentence.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}

// Do not modify the below lines
module.exports = { titleCase };

or

function titleCase(sentence) {
    // Convert the sentence to lowercase and split into words
    const words = sentence.toLowerCase().split(' ');

    // Use map() to capitalize the first letter of each word
    const titleWords = words.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    });

    // Join the words back into a sentence
    return titleWords.join(' ');
}

// Do not modify the below lines
module.exports = { titleCase };

EXPLANATION : Use map() when you want to transform every element of an array into a new array.
It does not change the original array.

