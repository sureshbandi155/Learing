// 6. check the number
let numbersArray = [1, 2, 3, 4, 5];
function checkElement(number) {
    let ifTure = '';
    for (let num in numbersArray) {
        if (numbersArray[num] == number) {
            ifTure = 'The value ' + number + ' is exist in index of @:' + num;
            break;
        }
        else {
            ifTure = 'The value ' + number + ' is not exist in the Array';
        }
    }
    console.log(ifTure);

}
let testNum = prompt('Enter Number', 100);
checkElement(testNum);

// 5. Negative number 
let negativeNum = [-1, -2, -3, 0, 1, 2, 3];
let output = '';
negativeNum.map(num => {
    if (num < 0) {
        output += num + ' ';
    }
});
console.log('Negative numbers: ' + output);

// 4. Object
let customeDetails = {
    id: 0,
    name: 'suresh',
    address: 'AP',
    phoneNum: '964XXXxxxx',
    email: 'suresh.bandi@brillio.com'
}
console.log(customeDetails);

// 3. dispay count of even and odd 
let count = '';
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let evenNumbers = [];
let OddNumbers = [];
numbers.map(num => {
    if ((num % 2) === 0) {
        evenNumbers.push(num);
    }
    else {
        OddNumbers.push(num);
    }

});
console.log('Even count numbers is: ' + evenNumbers.length);
console.log('Odd count numbers is: ' + OddNumbers.length);

// 2. dispay Even nums
let evenCount = '';
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let evenNumbers1 = [];
numbers.map(num => {
    if ((num % 2) === 0) {
        evenNumbers1.push(num);
    }

});
console.log('Even Numbers are: ' + evenNumbers1);

//1. largest one
let num1 = 1000, num2 = 200, num3 = 30;
if (num1 > num2 && num1 > num3) {
    console.log('The Biggest value is ' + num1);
}
else if (num2 > num3) {
    console.log('The Biggest value is ' + num2);
}
else {
    console.log('The Biggest value is ' + num3);
}

