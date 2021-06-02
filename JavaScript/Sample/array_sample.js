var iceCreams = ['Choco', 'Vanilla', 'Strawberry', 'Cassata'];
console.log('===Array operations===');
console.log(iceCreams);
iceCreams.push('Butterscotch'); //push(add) last element from array
console.log(iceCreams);
iceCreams.pop(); // Remove last ele 
console.log(iceCreams);
console.log(iceCreams.toString()); //covert string for coma seperator
// console.log(iceCreams.split(' ')); //covert string for coma seperator
console.log(iceCreams.join('*')); //joins inbetwenn string
iceCreams.shift(); //remove the first ele
console.log(iceCreams);
iceCreams.unshift('Pista'); //add the first ele
console.log(iceCreams);
iceCreams.splice(0, 1, 'Black current'); //add the first ele
console.log(iceCreams);



iceCreams.forEach(displayEle);

function displayEle(element, index, array) {
    console.log(index + ' ' + element);
    console.log(array);
}

// Foreach 
let forEachOutput = '';
iceCreams.forEach(function (fruit) {
    // if (fruit === 'Vanilla') {
    //     break;
    forEachOutput += fruit + ' ';
    // }

});
console.log('forEach Output: ' + forEachOutput);

// hosing is not support for firstclass fun 
// let fruitsOutput = function 

var length = iceCreams.map(function (element, index, array) {
    console.log(element.length);
});

// filter 
var filterIce = iceCreams.filter(function (element) {
    return element.length > 9;
});
console.log(filterIce);

// reducer will return a single value 
var reduceIceCreams = iceCreams.reduce((data, ele) => {
    return data + ' ' + ele;
}, 'New flavour'); //we can add or assing the value as well
console.log('using reducer: ' + reduceIceCreams);

// every() and some()
// let everyIces = iceCreams.every((ice,))
let findIceCreams = iceCreams.find(ice => ice.length > 10); //returns the values of the first element that satisfied the given condition
console.log('find Ice > 10 lenght: ' + findIceCreams);

let findIceFlvourIndex = iceCreams.indexOf('Cassata'); //finds the first occured index positon
console.log('index Position: ' + findIceFlvourIndex);



iceCreams.push('Vanilla');
console.log('new Array: ' + iceCreams);
console.log(iceCreams.lastIndexOf('Vanilla')); //returns the last index

let array1 = [5, 12, 8, 130, 44];

let isLargeNumber = (element) => element > 10;

console.log(array1.findIndex(isLargeNumber));
