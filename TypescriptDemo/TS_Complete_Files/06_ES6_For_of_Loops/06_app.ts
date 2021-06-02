/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

// Usage of for...in loop from ES5
let technologies:Array<string> = ['HTML','CSS','JavaScript','Bootstrap'];


// Normal For Loop ES5
let output:string = '';
for(let i=0; i<technologies.length; i++){
    output += technologies[i] + ' ';
}
console.log(output);

// For..in Loop ES5
output = '';
for(let index in technologies){
    output += technologies[index] + ' ';
}
console.log(output);

// ForEach function ES5
output = '';
technologies.forEach(function(element) {
    output += element + ' ';
});
console.log(output);

// Usage of for...of loop from ES6
output = '';
for(let element of technologies){
    output += element + ' ';
}
console.log(output);