/*Write a JavaScript function calculateBMI that calculates a person's 
Body Mass Index (BMI) based on their weight and height, and returns a 
corresponding health classification.The BMI is a commonly used indicator of body weight status and health.*/
CODE BUG FIXING 
function calculateBMI(weight, height) {
    // Write your code here
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 || bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 || bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
console.log(calculateBMI(50, 1.7));

In this program the condition false becz if we want to check value with proper answer then && is used 
consider if value 30 still it show true then this is wrong output so we used && condition 

 Whenever you're checking whether a value falls between two numbers, you almost always need &&, not ||.

 
