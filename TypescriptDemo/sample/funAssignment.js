var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1
var gretting = function (name) { return "Hi " + name.toUpperCase() + ", have a great evening.."; };
console.log(gretting('suresh'));
// 2.
var total = function (num1, num2) { return "The total of Two numbers " + num1 + " and " + num2 + " is: " + (num1 + num2); };
console.log(total(10, 20));
// 3.customer details 
var customeDetails = function (id, name, address, phone) {
    if (id === void 0) { id = 124491; }
    if (name === void 0) { name = 'suresh'; }
    if (phone === void 0) { phone = 1234567899; }
    return "Customer details are id: " + id + " and name: " + name + " and address: " + address + " and phone num: " + phone;
};
console.log(customeDetails(10, 'suresh bandi', 'Tirupati'));
// 4. ten num from user and display > 50
var numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log('Numbers > 50 are: ');
var displayGraterNum = function (numbers) {
    return numbers.filter(function (number) {
        return number > 50;
    });
};
console.log(displayGraterNum(numArray));
// 5.Display letter which contain a or e
var namesArray = ['Test', 'suresh', 'max', 'john'];
var findWords = function (names) {
    var filterNames = [];
    names.map(function (name) {
        if (name.indexOf('a') != -1 || name.indexOf('e') != -1) {
            filterNames.push(name);
        }
    });
    console.log("Filterd Names which contain a or e letters: " + filterNames);
};
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
var LaptopDetails = /** @class */ (function () {
    function LaptopDetails(srNum, brand, YOM, price, confg) {
        this.serianNum = srNum;
        this.brand = brand;
        this.yearOfManu = YOM;
        this.price = price;
        this.configuration = confg;
    }
    LaptopDetails.prototype.displayLapDetails = function () {
        console.log("Laptop Details Serialnumber: " + this.serianNum + " and brand " + this.brand + " and YOM is " + this.yearOfManu + " and price: " + this.price + " and finally cofiguration are: " + this.configuration);
    };
    return LaptopDetails;
}());
var lapDetails = new LaptopDetails(12345, 'Acer', '2020', 35000, 'SSD: 512GB and Intel i5 process');
lapDetails.displayLapDetails();
// 7. shape 
var Shape = /** @class */ (function () {
    function Shape(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    Shape.prototype.displayShapeDetails = function () {
        console.log("Rectangle area is: " + this.length * this.breadth + " and given dimensions are length: " + this.length + " and Breadth: " + this.breadth + " .");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, length, breadth) {
        var _this = _super.call(this, length, breadth) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.displayShapeDetails = function () {
        _super.prototype.displayShapeDetails.call(this);
        console.log("The Circle radius is: " + this.radius);
    };
    return Circle;
}(Shape));
var shapeInfo = new Circle(10, 20, 15);
shapeInfo.displayShapeDetails();
