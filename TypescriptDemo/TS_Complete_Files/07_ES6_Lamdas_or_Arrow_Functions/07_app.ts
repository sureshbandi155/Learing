/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/

// Example 1
let greet1 = function() {
    return "Good Morning";
};
let greet2 = () => "Good Morning";

console.log(greet1());
console.log(greet2());

// Example 2
let wish1 = function(name) {
    return name + " Good Morning ";
};

let wish2 = (name) => name + " Good Morning ";
console.log(wish1('John'));
console.log(wish2('John'));

// Example 3
let sum1 = function(a:number , b:number):number {
    return a + b;
};
let sum2 = (a:number,b:number):number => a + b;
console.log(`The Sum of a , b is : ${sum1(10,20)}`);
console.log(`The Sum of a , b is : ${sum2(10,20)}`);

// Example 4

let movies:Array<string> = ['Baahubali' , 'Dangal' , 'Drushyam'];

let uppercaseMovies1 = movies.map(function (movie) {
        return reverseStr(movie);
    }
);

let uppercaseMovies2 = movies.map((movie) => reverseStr(movie));
console.log(uppercaseMovies1);
console.log(uppercaseMovies2);

function reverseStr(str:string):string{
    let tempStr:string = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}


