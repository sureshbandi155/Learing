/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

// ES5 version without using Destructing feature

let employee:Array<any> = ['John',40,'Manager'];

let ename:string = employee[0];
let eage:number = employee[1];
let edesg:string = employee[2];

console.log(`Name : ${ename} Age : ${eage} Desg: ${edesg}`);

// ES 6 version using Destructing feature

let student:Array<any> = ['Rajan',25,'Engineering'];
let [sname,sage,scourse] = student;
console.log(`Name : ${sname} Age : ${sage} Course: ${scourse}`);

// Exchange the variable's data
let a:number = 10;
let b:number = 20;

[a , b] = [b , a];

console.log(`a : ${a} b: ${b}`);