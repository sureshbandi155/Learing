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
var greet1 = function () {
    return "Good Morning";
};
var greet2 = function () { return "Good Morning"; };
console.log(greet1());
console.log(greet2());
// Example 2
var wish1 = function (name) {
    return name + " Good Morning ";
};
var wish2 = function (name) { return name + " Good Morning "; };
console.log(wish1('John'));
console.log(wish2('John'));
// Example 3
var sum1 = function (a, b) {
    return a + b;
};
var sum2 = function (a, b) { return a + b; };
console.log("The Sum of a , b is : " + sum1(10, 20));
console.log("The Sum of a , b is : " + sum2(10, 20));
// Example 4
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var uppercaseMovies1 = movies.map(function (movie) {
    return reverseStr(movie);
});
var uppercaseMovies2 = movies.map(function (movie) { return reverseStr(movie); });
console.log(uppercaseMovies1);
console.log(uppercaseMovies2);
function reverseStr(str) {
    var tempStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        tempStr += str.charAt(i);
    }
    return tempStr;
}
