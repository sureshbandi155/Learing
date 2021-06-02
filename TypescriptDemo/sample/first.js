var message = 'Good morning..';
console.log(message);
// message = 123;
// To genere js file
// npx tsc filename.ts => will generate .js file we should attach .js file into html file
// 1. tsc first.ts
// node first.js
// 2. npx tsc first.ts
// node first.js
//arrays
var numArray;
numArray = [1, 2, 3, 4];
var numArray1 = new Array(5);
var numArray2 = new Array(5);
var strArray2 = new Array('test', 'test1', 'test2');
console.log(strArray2);
//destructin
var name1 = strArray2[0], name2 = strArray2[1], name3 = strArray2[2];
function display(id, name) {
    console.log('userId: ' + id);
    console.log('userName: ' + name);
}
display(124491, 'suresh');
function display1(id, name, aadharNum) {
    if (name === void 0) { name = 'suresh bandi'; }
    console.log('userId: ' + id);
    console.log('userName: ' + name);
    if (aadharNum)
        console.log('userAadhar Num: ' + aadharNum); //without aadharnum it wil return undefined
}
display1(124491, 'suresh');
display1(124491);
display1(124491, 'Sasikanth', '123456kdj');
// rest para
function display2(id) {
    var otherDetails = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherDetails[_i - 1] = arguments[_i];
    }
    console.log('userId: ' + id);
    var name = otherDetails[0], aadharNum = otherDetails[1];
    console.log(name);
    console.log(aadharNum);
    console.log(otherDetails);
    console.log('userName: ' + name);
    if (aadharNum)
        console.log('userAadhar Num: ' + aadharNum);
}
display2(121212, 'using rest para');
