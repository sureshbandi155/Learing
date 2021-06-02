/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
// Usage of let vs Var inside for loop created variables
for (var i = 0; i <= 10; i++) {
}
console.log(i); // 11
for (var j = 0; j <= 10; j++) {
}
//console.log(j); Error: cannot find the name 'j'
// Usage of let vs var inside if block
var course = 'Engineering';
if (course === 'Engineering') {
    var job1 = 'Software';
    var job2 = 'Govt';
}
console.log(job1); // Software
// console.log(job2); // Error: cannot find the name 'job2'
// Usage Const variable creation
var APP_NAME = 'TS App';
//APP_NAME = 'JS App'; Error : its a read-only / Const property
if (course === 'Engineering') {
    var DEPT = 'Info Systems';
}
// console.log(DEPT); // Error: Cannot Access
