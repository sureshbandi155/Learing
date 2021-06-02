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
var sectionElement = document.querySelector('#container');
var employee = {
    name: 'John',
    age: 40,
    desination: 'Manager'
};
var htmlStr = '<div style="background-color: lightgreen">' +
    '<h1> Name :' + employee.name + '</h1>' +
    '<h1> Age :' + employee.age + '</h1>' +
    '<h1> Desg :' + employee.desination + '</h1>' +
    '</div>';
sectionElement.innerHTML = htmlStr;
var templateStr = "<div style=\"background-color: orange\">\n                               <h1>Name : " + employee.name + "</h1>\n                               <h1>Age : " + employee.age + "</h1>\n                               <h1>Desg : " + employee.desination + "</h1>\n                         </div>";
sectionElement.innerHTML = templateStr;
