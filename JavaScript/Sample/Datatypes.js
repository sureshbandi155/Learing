// primitive => string, number , Boolean
// non-primitive/ Trivial  => null, undefined
//complex types => objects, functions
let obj = {};
console.log(typeof obj); //Object

let array = [];
console.log(typeof array); // Object

let empty = null;
console.log(typeof empty);// Object

let string = 12 + null;
console.log(string); //12

let string1 = 12 + undefined;
console.log(string1); //NaN