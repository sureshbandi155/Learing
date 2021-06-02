// Hello World App
let greeting:string = 'Good Morning TS';
console.log(greeting);

// Functions in Typescript
function greet(name:string,age:number):string{
    let greetMsg:string = 'Hello ' + name + ' You are ' + age + ' years Old !';
    return greetMsg;
}

let output:string = greet('John',45);
console.log(output);

function countdownCompletedf(final = 30,initial=20,interval=20){
    let output='';
    let current = initial;
    while (current <= final){
        output +="" +current;
        console.log(current);
        current += interval;
    }
    document.querySelector('#display').innerHTML=output;
}
countdownCompletedf();

