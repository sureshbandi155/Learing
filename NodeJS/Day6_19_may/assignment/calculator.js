// const isNumber = (a,b) => {
//     if()
// }
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => b !== 0 ? (a / b) : undefined
module.exports = {
    add,
    subtract,
    multiply,
    divide,
}

// exports.isNumber = function (num1, num2) {
//     let output = num1 + num2;
//     if (typeof output === 'number') {
//         return true;
//     }
//     else if (num1 > 0 && num2 > 0) {
//         return true;
//     }
//     else return false;
// }
// // exports.is
// // exports.isNumbValid = function (num1, num2) {
// //     let output = num1 + num2;
// //     if (typeof output === 'number') {
// //         return true;
// //     }
// //     else if (num1 > 0 && num2 > 0) {
// //         return true;
// //     }
// //     else if ((num1 > 20 && num1 <= 60) && (num2 > 20 && num2 <= 60)) {
// //         return true;
// //     }
// //     else return false;
// //     // if ((num1 > 0 && num2 > 0) && (num1 > 20 && num1 <= 60) && (num2 > 20 && num2 <= 60)) {
// //     //     return true;
// //     // }
// //     // else return false;
// //     // if (num1 > 20 && num2 <= 60) {
// //     //     return true;
// //     // }
// //     // let add = function (num1, num2) {
// //     //     let output = num1 + num2;
// //     //     console.log('Addition of two numbers is: ' + output);
// //     //     if (typeof output === 'number') {
// //     //         return output;
// //     //     }
// //     // }
// //     // let sub = function (num1, num2) {
// //     //     let output = num1 - num2;
// //     //     console.log('Substractin of two numbers is: ' + output);
// //     //     if (typeof output === 'number') {
// //     //         return output;
// //     //     }
// //     // }
// //     // let divide = function divide(num1, num2) {
// //     //     let output = num1 / num2;
// //     //     console.log('Division of two numbers is:' + output);
// //     //     if (typeof output === 'number') {
// //     //         return output;
// //     //     }
// //     // }
// //     // let multiply = function multiply(num1, num2) {
// //     //     let output = num1 + num2;
// //     //     console.log('Multiplication of two numbers is: ' + output);
// //     //     if (typeof output === 'number') {
// //     //         return output;
// //     //     }
// //     // }
// //     // if (add && sub && divide && multiply) {
// //     //     return true;
// //     // }
// //     // else false;
// // }
