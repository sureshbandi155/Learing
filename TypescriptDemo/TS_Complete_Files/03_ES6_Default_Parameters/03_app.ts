/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

// Create a function and provide few default parameters using ES6
function printValues(starts:number,ends:number=10):string{
    let strNumber:string ='';
    for (let i=starts;i<=ends;i++){
        strNumber += i + " ";
    }
    return strNumber;
}
let output:string = printValues(0);
console.log(output);