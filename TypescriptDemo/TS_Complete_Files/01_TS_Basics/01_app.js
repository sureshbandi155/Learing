// Hello World App
var greeting = 'Good Morning TS';
console.log(greeting);
// Functions in Typescript
function greet(name, age) {
    var greetMsg = 'Hello ' + name + ' You are ' + age + ' years Old !';
    return greetMsg;
}
var output = greet('John', 45);
console.log(output);
function countdownCompletedf(final, initial, interval) {
    if (initial === void 0) { initial = 20; }
    if (interval === void 0) { interval = 20; }
    var output = '';
    var current = initial;
    while (current <= final) {
        output += "" + current;
        console.log(current);
        current += interval;
    }
    document.querySelector('#display').innerHTML = output;
}
countdownCompletedf(20);
