/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Create a function and provide few default parameters using ES6
function printValues(starts, ends) {
    if (ends === void 0) { ends = 10; }
    var strNumber = '';
    for (var i = starts; i <= ends; i++) {
        strNumber += i + " ";
    }
    return strNumber;
}
var output = printValues(0);
console.log(output);
