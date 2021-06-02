function add(num1, num2) {
    let output = num1 + num2;
    console.log('Addition of two numbers is: ' + output);
}
function sub(num1, num2) {
    let output = num1 - num2;
    console.log('Substractin of two numbers is: ' + output);
}
function divide(num1, num2) {
    let output = num1 / num2;
    console.log('Division of two numbers is:' + output);
}
function multiply(num1, num2) {
    let output = num1 + num2;
    console.log('Multiplication of two numbers is: ' + output);
}
function calculator(num1, num2) {
    add(num1, num2);
    sub(num1, num2);
    divide(num1, num2);
    multiply(num1, num2);
}
console.log(calculator(200, 100));