/*Write a JavaScript function reverseString that takes a 
string as input and returns the string with its characters reversed.*/

function reverseString(str){
    let rev= "";
    for(let i=str.length-1; i>=0;i--)
    {
        rev +=str[i];
    }
            return rev;

}
console.log(reverseString("JavaScript"));