// Create a simple function to add two numbers
function add(a, b) {
    var addition = a + b;
    return addition;
}
console.log("the sum of a , b  is : " + add(10, 20));
// Create the same add function with first number as 'any' type
function addAny(a, b) {
    var sum = 0;
    if (typeof a === 'number') {
        sum = a + b;
    }
    else if (typeof a === 'string') {
        if (isNaN(parseFloat(a))) {
            sum = b;
        }
        else {
            sum = parseFloat(a) + b;
        }
    }
    else {
        sum = b;
    }
    return sum;
}
console.log("10 , 20 : " + addAny(10, 20));
console.log("'10' , 20 : " + addAny('10', 20));
console.log("'ABC' , 20 : " + addAny('ABC', 20));
console.log("true , 20 : " + addAny(true, 20));
function findMax(a, b, c) {
    // a is passed
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        return Math.max(a, b);
    }
    else {
        return Math.max(a, b, c);
    }
}
console.log("1 : param : " + findMax(10));
console.log("2 : param : " + findMax(10, 20));
console.log("3 : param : " + findMax(10, 20, 50));
// console.log(`4 : param : ${findMax(10,20,50,60)}`);
