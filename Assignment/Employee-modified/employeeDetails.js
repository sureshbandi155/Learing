// 1.Write a function using ES6, which displays following details of an employee.
// name,email,phoneno,address,names of previous project,years of experience,PAN .

const employee = (name, email, phoneno, address = 'brillio', experience, pan, ...nameofPreviousprj) => {
    let projectNames = '';
    if (nameofPreviousprj.length === 0) {
        projectNames = `employee having zero projects`;
    } else projectNames = nameofPreviousprj;

    console.log(`Name of the Employee is ${name} email is ${email} and phone Number is ${phoneno} and address is ${address} has been worked on projects are ${projectNames} and having experience of ${experience} years and location is pan: ${pan}`);
}
console.log(employee('suresh', 'suresh@test.com', 9696969696, undefined, 2, 'India'));
console.log(employee('Test', 'Test@test.com', 9696969696, undefined, 2, 'India', 'ReactJS - Sports app', 'ReactJS - Sports app2'));


// 2. Test suits  
const name = (name) => (name.length >= 3 && name.length <= 30)
const exp = (exp) => {
    if (exp >= 0 && exp <= 2) {
        return true;
    }
}
const email = (email) => {
    if (email.indexOf('@') && email.indexOf('.') !== -1) {
        return true;
    }
}
const address = (address) => {
    if (address === 'brillio' || address === undefined) {
        return true;
    }
}
const projects = (projects) => {
    if (projects.length === 0 || projects.length >= 1) {
        return true;
    }
}
module.exports = {
    name,
    exp,
    email,
    address,
    projects
}
