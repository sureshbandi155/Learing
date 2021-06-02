function show() {
    return 'Hi hello'
}
let greet = show()
console.log(greet);

// 1.
function show1() {
    return function () { return 'Hello..' }
}
let greet1 = show1();
console.log(greet1());

// 2.
function show2(name) {
    return function () { return 'Good moring ' + name }
}
let greet2 = show2('Suresh');
console.log(greet2());

// 3.
function show3(message) {
    return function (name) { return message + ' ' + name }
}
let greet3 = show3('Hello world');
console.log(greet3('Suresh Brillio'));

// 4

let num1 = 10;
function show4(message) {
    let num2 = 20;
    return function (name) {
        var num3 = num1;
        console.log('num3 ' + num3);
        return message + ' ' + name;
    }

}
let greet4 = show4('Get number');
console.log(greet4('Test'));