// Array => collection of items stored in a contines memrory locatin 

let fruits = ['apple', 'bananna', 'orange'];
console.log(fruits.length);
// console.log('index of apple' + fruits[0]);

let output = '';
for (let i = 0; i < fruits.length; i++) {
    output += fruits[i] + ' ';

}
console.log('Normal for loop: ' + output);

// for in 
output = '';
for (let index in fruits) {
    output += fruits[index] + ' ';
}
console.log('forIn loop: ' + output);
// for of 
// for (let fruit in fruits) {
//     console.log(fruit);
// }
output = '';
for (let fruit of fruits) {
    output += fruit + ' ';
}
console.log('forOf loop: ' + output);

let count = 0;
console.log('while repeater');
while (count < fruits.length) {
    console.log(fruits[count]);
    count++;
}
let arrayToObj = [];
console.log('Map iteration');
fruits.map((fruit, index) => {
    arrayToObj.push({
        id: index,
        value: fruit
    });
});
console.log(arrayToObj);


switch (new Date().getDay()) {
    case 0:
        console.log('sunday');
        break;
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    default:
        console.log('remaining day');
        break;
}

// Foreach 
let forEachOutput = '';
fruits.forEach(function (fruit) {
    forEachOutput += fruit + ' ';
});
console.log('forEach Output: ' + forEachOutput);
