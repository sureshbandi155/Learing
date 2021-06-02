/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
// Usage of for...in loop from ES5
var technologies = ['HTML', 'CSS', 'JavaScript', 'Bootstrap'];
// Normal For Loop ES5
var output = '';
for (var i = 0; i < technologies.length; i++) {
    output += technologies[i] + ' ';
}
console.log(output);
// For..in Loop ES5
output = '';
for (var index in technologies) {
    output += technologies[index] + ' ';
}
console.log(output);
// ForEach function ES5
output = '';
technologies.forEach(function (element) {
    output += element + ' ';
});
console.log(output);
// Usage of for...of loop from ES6
output = '';
for (var _i = 0, technologies_1 = technologies; _i < technologies_1.length; _i++) {
    var element = technologies_1[_i];
    output += element + ' ';
}
console.log(output);
