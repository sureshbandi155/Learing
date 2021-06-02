console.log('Form External script');

//var, let, const

var empName = 'suresh';
let empAge = 23;
function displayDetails() {
    let orgName = 'brillio';
    let address = 'India';
    empName = 'suresh@brillio';
    empAge = 30;
    console.log('hey ' + empName + '!!');
    console.log(empAge);
    console.log(orgName);
    console.log(address);
}
/*
 console.log(orgName);
 console.log(address);
*/

displayDetails();
console.log('Bye ' + empName + '!!');
console.log(empAge);
console.log(empAge);

{
    let a = 10;
    console.log(a);
}
// console.log(a);
// Blow are redeclaration errors
// var a = 10;
// let a = 30;
// VM59: 2 Uncaught SyntaxError: Identifier 'a' has already been declared
// let a = 10;
// let a = 30;
// VM67: 2 Uncaught SyntaxError: Identifier 'a' has already been declared
// {
//     var a = 10;
//     let a = 30;
// }
// VM82: 1 Uncaught SyntaxError: Identifier 'a' has already been declared
// {
//     var b = 10;
//     let b = 30;
// }
let num1 = 60;
{
    let num1 = 99;
    console.log(num1);
}
console.log(num1);
