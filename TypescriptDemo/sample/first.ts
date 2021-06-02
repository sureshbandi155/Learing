var message:string = 'Good morning..';
console.log(message);
// message = 123;

// To genere js file
// npx tsc filename.ts => will generate .js file we should attach .js file into html file

// 1. tsc first.ts
// node first.js

// 2. npx tsc first.ts
// node first.js

//arrays
var numArray:number[] ;
numArray = [1,2,3,4];

var numArray1:number[] = new Array(5);
var numArray2:number[] = new Array(5);
var strArray2:string[] = new Array('test','test1','test2');
console.log(strArray2);

//destructin
var [name1, name2, name3] = strArray2;

function display(id:number, name:string):void{
    console.log('userId: '+ id);
    console.log('userName: '+ name);
}
display(124491,'suresh');

function display1(id:number, name:string = 'suresh bandi', aadharNum?:string):void{
    console.log('userId: '+ id);
    console.log('userName: '+ name);
    if(aadharNum)
     console.log('userAadhar Num: ' + aadharNum); //without aadharnum it wil return undefined
}
display1(124491,'suresh');
display1(124491);
display1(124491,'Sasikanth','123456kdj');
// rest para
function display2(id:number, ...otherDetails:any):void{
    console.log('userId: '+ id);
    const [name, aadharNum] = otherDetails;
    console.log(name);
    console.log(aadharNum);
    console.log(otherDetails);
    console.log('userName: '+ name);
    if(aadharNum) console.log('userAadhar Num: ' + aadharNum);
}
display2(121212,'using rest para');