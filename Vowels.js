/*Write a JavaScript function countVowels that counts the number of vowels (a, e, i, o, u) 
in a given string. The function should take one argument: str (string).*/
CODE BUG FIXING
function countVowels(str) {
    // Write your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i <= lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}

Input: "Coding is fun with fellow learners"
Output: 10

Avoid using <= because it performs one extra iteration and accesses an invalid index (array[length]), which is undefined.
Using < ensures you visit every valid element exactly once without accessing an out-of-range index.

