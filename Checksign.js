/*Write a JavaScript function checkSign that takes three numbers as 
input and returns a string representing the signs of the numbers.*/
CODE TO WRITE 
function Sign(a, b, c) {
    let positive = 0;
    let negative = 0;

    if (a > 0) {
        positive++;
    } else {
        negative--;
    }

    if (b > 0) {
        positive++;
    } else {
        negative--;
    }

    if (c > 0) {
        positive++;
    } else {
        negative--;
    }

    if (positive === 3) {
        return "+++";
    } else if (positive === 2) {
        return "++-";
    } else if (positive === 1) {
        return "+--";
    } else {
        return "---";
    }
}

console.log(Sign(2, 5, 7));     // +++
console.log(Sign(8, -3, 4));    // ++-
