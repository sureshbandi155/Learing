/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// ES5 version without using Destructing feature
var employee = ['John', 40, 'Manager'];
var ename = employee[0];
var eage = employee[1];
var edesg = employee[2];
console.log("Name : " + ename + " Age : " + eage + " Desg: " + edesg);
// ES 6 version using Destructing feature
var student = ['Rajan', 25, 'Engineering'];
var sname = student[0], sage = student[1], scourse = student[2];
console.log("Name : " + sname + " Age : " + sage + " Course: " + scourse);
// Exchange the variable's data
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a : " + a + " b: " + b);
var _a;
