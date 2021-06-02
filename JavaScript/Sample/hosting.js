// Hosting - behaviour that moves all the declataion to the top of the file(current scope).

name = 'suresh';
console.log(name);
var name;

/*
name1 = 'suresh_let';
console.log(name1); //Cannot access 'name1' before initialization
let name1;
*/

// functions
displaySum(10);
function displaySum(x) {
    y = x * x;
    console.log(y);
}

/*
sumVariable(10); //Cannot access 'sumVariable' before initialization
// It will not applicable for first class functions
let sumVariable = function displaySum(x) {
    y = x * x;
    console.log(y);
}
*/

const details = {
    name: 'suresh',
    emp: 'brillio'
}
console.log(details);
details.name = 'suresh bandi';
details.emp = 'brillio cmp';
console.log(details);

/*
details = { //Assignment to constant variable
    name: 'suresh reddy',
    emp: 'brillio company'
}
console.log(details);
*/
