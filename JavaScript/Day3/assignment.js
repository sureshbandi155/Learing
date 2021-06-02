// 1. fun name as a arg and display in capital 
function Displayname(name) {
    console.log('Hi ' + name.toUpperCase() + ', have a great evening..!!');
}
Displayname('suresh');

// 2. print prime numbers
function checkPrimeNumber(start, end) {
    console.log('The prime numbers between ' + start + ' and ' + end + ' are:');
    for (let i = start; i <= end; i++) {
        let flag = false;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = true;
                break;
            }
        }

        if (i > 1 && flag === false) {
            console.log(i);
        }
    }

}
checkPrimeNumber(1, 10);

// 3. Farenheit to celcius
function farToCal(number) {
    let calcius = (number - 32) * 5 / 9;
    console.log('Given Farenheit to celcius is: ' + calcius.toFixed(2) + ' degrees');
}
farToCal(100);

// 4.
let output = '';
let repeatedChar = 0;
function twoParemeterFun(string, char) {
    console.log('Given Char is: ' + char);
    let arrayStr = string.split("");
    countStr(string, char);
    for (let str in arrayStr) {
        if (arrayStr.indexOf(char) === -1) {
            output = 'The Given Char ' + char + ' is not present in the ' + string;
        }
        else output += 'The Given Char ' + char + ' is present at @: ' + str;
        return output;
    }

}
function countStr(str, cha) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch === cha) {
            count++;
        }
    }
    // return count;
    console.log('Number of occurence is: ' + count);
}

let stringOutput = twoParemeterFun('mousemm', 'm');
console.log(stringOutput);


