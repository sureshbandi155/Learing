/*1. create an array with 5 numbers.
create another array, copy the contents of the 1st.
Add 2 more numbers to the second array.*/
let firstArray = [1, 2, 3, 4, 5];
let secondArray = [...firstArray, 6, 7];
console.log('FistArray Copy: ' + firstArray + ' And SecondArray: ' + secondArray);

// 2. Write a function which takes zero or more certifications as arguments and print them
function printCertification(cert1, cert2) {
    return 'certification 1 is: ' + cert1 + ' and certification 2 is: ' + cert2;
}
console.log(printCertification('ReactJS', 'NodeJS')); //rest parameters.


/*3.Write a program to hold information of  projects.Following are the details to be considered.
Project code, Project name,Project incharge,Start date,end date,customer name.
Use different functions accept and display data.*/

class projectData {
    constructor(prjCode, prjName, prjIncharge, prjStartDate, prjEndDate, customer_name) {
        this.Project_code = prjCode;
        this.Project_name = prjName;
        this.Project_incharge = prjIncharge;
        this.Start_date = prjStartDate;
        this.End_date = prjEndDate;
        this.customer_name = customer_name;

    }
    displayProjectDetails() {
        return `project Detials are: Project Code is: ${this.Project_code} and Project_name is: ${this.Project_name} and Project_incharge: ${this.Project_incharge} and Start_date is: ${this.Start_date} and End_date is: ${this.End_date} and customer_name is: ${this.customer_name}`;
    }
}
let projectDetails = new projectData(194421, 'Test Project', 'Test Incharge', new Date().toDateString(), new Date().toDateString(), 'HDFC');

console.log(projectDetails.displayProjectDetails());



/*
4.Imagine a publishing company that markets both book and dvd version of its works. Create a class called publication that stores the title(a string) and price(type float) of a publication. From this class derive two classes,book which adds a page count(type int) and dvd which adds a playing time(type int).
Each of these classes should have a getdata() function to get its data from the user, and a putdata() function to display the data
Execute the program.
*/

class publication {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    displayData() {
        return `Title is: ${this.title} and price is: ${this.price}`;
    }

}
class books extends publication {
    constructor(pageCnt, title, price) {
        super(title, price);
        this.pageCount = pageCnt;
    }
    displayBookData() {
        console.log(super.displayData());
        console.log('Books Page count: ' + this.pageCount);
    }
}
let displayBookpages = new books(101, 'Test Book', 239);
displayBookpages.displayBookData();



class dvd extends publication {
    constructor(playingTime) {
        super();
        // super(title, price);
        this.playingTime = playingTime;
    }
    displaydvdData() {
        // console.log(super.displayData());
        console.log('Dvd Playing Time: ' + this.playingTime);
    }
}
let displaydvdTime = new dvd(5);
displaydvdTime.displaydvdData();


/*
5. Write a program to hold information of 3 Sports with the following details.
Sport name,category(for ex. indoor/outdoor),type(for ex. net/table/others), Scoring systems,number of players
Use different functions accept and display data.
*/


class sportName {
    constructor(sportname, category, type, scroingSystem, NumberofPlayers) {
        this.sport_name = sportname;
        this.sport_category = category;
        this.sport_type = type;
        this.scoring_system = scroingSystem;
        this.number_of_players = NumberofPlayers;

    }
    displaySportNames() {
        return `Sports detials are: sport_name is: ${this.sport_name} and sport_category is: ${this.sport_category} and sport_type: ${this.sport_type} and scoring_system is: ${this.scoring_system} and number_of_players is: ${this.number_of_players}.`;
    }
}

// let sportDetails1 = [new sportName('Cricket1', 'outdoor', 'others', 'numbers', 11),];
// let sportDetails1 = [{ sp1: new sportName('Cricket1', 'outdoor', 'others', 'numbers', 11) }, { sp2: new sportName('Cricket1', 'outdoor', 'others', 'numbers', 11) }, { sp3: new sportName('Cricket1', 'outdoor', 'others', 'numbers', 11) }];

let sportDetails1 = new sportName('Cricket1', 'outdoor', 'others', 'numbers', 11);
let sportDetails2 = new sportName('Cricket2', 'outdoor', 'others', 'numbers', 11);
let sportDetails3 = new sportName('Cricket3', 'outdoor', 'others', 'numbers', 11);

console.log(sportDetails1.displaySportNames());
console.log(sportDetails2.displaySportNames());
console.log(sportDetails3.displaySportNames());

// 1.Accept a string from the user , find the count of vowels and consonants.
// 2.Accept a string from the user, and display the reverse of it.
// 3.Accept 10 numbers from the user and store their squares in an array and their cubes in a different array.(Totally 3 arrays are required)
// 4.Accept 10 numbers from the user and store the alternate numbers in different arrays.
// Eg. array contains 12 23 5 45 56 69 77 89 44 10
// put 12,5,56,77,44 in an array and 23,45,69,89,10 in a different array
// 5.Accept 10 numbers from the user and display the numbers divisible by 7.

// 1. count vowels and consonants
// let userInput = prompt('Enter string to count vowels and consonants', 'Brillio');
// BEST and FASTER implementation using regex
//const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length

//countVowels('sures REDDY AEIOU')

function getCount(str) {
    let vowelList = 'AEIOUaeiou'
    let vowelsCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (vowelList.indexOf(str[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return `Given ${str} has ${vowelsCount} vowels`;
}
getCount('SURESH suresh');

// 2. Accept a string from the user, and display the reverse of it.
function reverseString(str) {
    return str.split("").reverse().join('');
}
console.log('Reverse of given Brillio is: ' + reverseString('Brillio'));

// 3.Accept 10 numbers from the user and store their squares in an array and their cubes in a different array.(Totally 3 arrays are required)
let squares, cubes;
function squareAndCubes(...numbers) {
    //return numbers
    squares = numbers.map(number => number * number)
    cubes = numbers.map(umber => number * number * number)
    console.log(squares);
    console.log(cubes);
}
squareAndCubes(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 4.Accept 10 numbers from the user and store the alternate numbers in different arrays.
// Eg. array contains 12 23 5 45 56 69 77 89 44 10
// put 12,5,56,77,44 in an array and 23,45,69,89,10 in a different array
let evenPosition = [];
let oddPosition = [];
function generateAlternateArray(...numbers) {
    for (let number in numbers) {
        (number % 2 === 0) ? evenPosition.push(numbers[number]) : oddPosition.push(numbers[number])
    }
    console.log(evenPosition);

    console.log(oddPosition);
}
generateAlternateArray(12, 23, 5, 45, 56, 69, 77, 89, 44, 10);


// 5.Accept 10 numbers from the user and display the numbers divisible by 7.
function divisibleBy7(...numbers) {
    let divisibleBySeverArray = numbers.filter(number => {
        return (number % 7 === 0)
    });
    console.log(divisibleBySeverArray);
    return divisibleBySeverArray
}
divisibleBy7(7, 14, 21, 30, 28, 35, 42, 48, 49, 56, 63, 70, 1, 2, 3, 4, 5, 6, 7);

















