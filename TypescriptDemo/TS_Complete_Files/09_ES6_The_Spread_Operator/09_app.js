/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
// Example 1 (to pass it as an arguments to another function)
var myArray = [10, 45646565, 465, 46, 46, 465, 4, 64, 78, 9451, 91, 58, 434, 37];
var min = Math.min.apply(Math, myArray);
console.log(min);
// Example 2 ( add an elements in the middle of an array)
var array1 = [30, 40, 50];
var array3 = [90, 100];
var array2 = [10, 20].concat(array1, [60, 70, 80], array3);
console.log(array2);
// Example 3 (creates a copy of an array)
var arr1 = [10, 20, 40, 30, 50, 560, 50];
var arr2 = arr1.slice(); // creates a new copy
arr2 = arr1.slice(); // creates a new copy
console.log(arr2);
