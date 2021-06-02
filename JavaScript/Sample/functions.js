
// ES6 Fun 
let sum = (a, b) => a + b; //it always return something
let output = 'The sum is: ' + sum(5, 10);
console.log(output);

let hello = () => 'Hello';
console.log(hello);

let hello1 = () => {
    var output1 = 'Hello';
    console.log(output1);
};
// console.log(typeof hello1);
// let testFun = function suresh() {
// }
// console.log(typeof testFun);
// callback fun 
function sayHello() {
    return 'Hello ';
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}

greeting(sayHello, 'Javascript');
greeting(sayHello, 'Suresh');
/*
When to use callback fun
1. When working with the file system(uploadind and downloading)
2. seding the network request to get some resources such as test or binary file form server
3.
*/