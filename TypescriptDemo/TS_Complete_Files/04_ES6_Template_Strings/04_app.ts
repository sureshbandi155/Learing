/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/



/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */

let sectionElement = document.querySelector('#container');

let employee = {
    name : 'John',
    age : 40,
    desination : 'Manager'
};


let htmlStr:string = '<div style="background-color: lightgreen">'+
    '<h1> Name :' + employee.name + '</h1>' +
    '<h1> Age :' + employee.age + '</h1>' +
    '<h1> Desg :' + employee.desination + '</h1>' +
    '</div>';

sectionElement.innerHTML = htmlStr;

let templateStr:string = `<div style="background-color: orange">
                               <h1>Name : ${employee.name}</h1>
                               <h1>Age : ${employee.age}</h1>
                               <h1>Desg : ${employee.desination}</h1>
                         </div>`;
sectionElement.innerHTML = templateStr;










