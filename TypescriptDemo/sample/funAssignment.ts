// 1
var gretting = (name:string):string => `Hi ${name.toUpperCase()}, have a great evening..`;
console.log(gretting('suresh'));

// 2.
var total = (num1:number, num2:number):any => `The total of Two numbers ${num1} and ${num2} is: ${num1+num2}`;
console.log(total(10,20));

// 3.customer details 
var customeDetails = (id:number=124491,name:string='suresh',address:string, phone:number=1234567899):any =>{
    return `Customer details are id: ${id} and name: ${name} and address: ${address} and phone num: ${phone}`;
}
console.log(customeDetails(10,'suresh bandi','Tirupati'));

// 4. ten num from user and display > 50
var numArray:number[] = [10,20,30,40,50,60,70,80,90,100]; 
console.log('Numbers > 50 are: ');
var displayGraterNum=(numbers:number[]):any =>{
    return numbers.filter(number=>{
        return number > 50
    });
};
console.log(displayGraterNum(numArray));


// 5.Display letter which contain a or e

var namesArray:string[] = ['Test','suresh','max','john'];
var findWords = (names:string[]):any =>{
    let filterNames:string[] = [];
    names.map(name=>{
        if(name.indexOf('a') != -1 || name.indexOf('e') != -1){
            filterNames.push(name);
        }
    })
    console.log(`Filterd Names which contain a or e letters: ${filterNames}`);
}
findWords(namesArray);


// var namesArray:string[] = ['suresh','max','john'];
// var findWords = (namesArray:string[]):any => {
//     var namesInStr = namesArray.map(name=>{
//         return name.split("").filter(letter=>{
//             if(letter === 'a' || letter === 'e'){
//                 console.log(letter);
//             }
//         })
//     });
// };
// console.log(findWords(namesArray));

// 6. class latop details 
class LaptopDetails{
    serianNum:number;
    brand:string;
    yearOfManu:string;
    price: number;
    configuration: string;

    constructor(srNum:number,brand: string, YOM:string,price:number,confg: string){
        this.serianNum = srNum;
        this.brand = brand;
        this.yearOfManu = YOM;
        this.price = price;
        this.configuration = confg;
    }

    displayLapDetails():void{
        console.log(`Laptop Details Serialnumber: ${this.serianNum} and brand ${this.brand} and YOM is ${this.yearOfManu} and price: ${this.price} and finally cofiguration are: ${this.configuration}`);

    }
}
var lapDetails = new LaptopDetails(12345, 'Acer', '2020',35000, 'SSD: 512GB and Intel i5 process');
lapDetails.displayLapDetails();


// 7. shape 
class Shape{
    length: number;
    breadth: number;
    constructor(length:number, breadth:number){
        this.length = length;
        this.breadth  = breadth;
    }
    displayShapeDetails():void{
        console.log(`Rectangle area is: ${this.length * this.breadth } and given dimensions are length: ${this.length} and Breadth: ${this.breadth} .`);
    }
}

class Circle extends Shape{
    radius: number;
    constructor(radius:number,length:number, breadth:number){
        super(length, breadth);
        this.radius = radius;
    }
    displayShapeDetails():void{
        super.displayShapeDetails();
        console.log(`The Circle radius is: ${this.radius}`);
    }
}
var shapeInfo = new Circle(10, 20,15);
shapeInfo.displayShapeDetails();