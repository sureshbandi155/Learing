//classes  => Templates
// you can create objects
//variables/fields,constructor,methods,getters and setters

class Employee {
    //constructor => to initialize the variables
    constructor(id, name) {
        this.id = id;
        this.name = name
    }
    display() {
        //try in es6 format
        return "Employee Id : " + this.id + " Name: " + this.name
    }

}

//let empObj1=new Employee(123,"Jyotiranjan")
//console.log(empObj1.display())

//inheritance
// create a new class from an existing class
// new class is called sub class , existing class that is inherited is called the super class
// the sub class will have some additional features
// extends keyword is used to inherit
// no multiple inheritance

class PermanentEmployee extends Employee {
    static organizationName = 'Brillio'

    constructor(basic, da, id, name) {
        super(id, name);
        this.basic = basic;
        this.da = da

    }
    show() {
        console.log(super.display())
        console.log("Basic " + this.basic)


    }
    static displayOrganization() {
        return `Organization : ${this.organizationName}`
    }
}
var permanentObj1 = new PermanentEmployee(5500, 200, 234, 'Mounika')
permanentObj1.show()
console.log(PermanentEmployee.displayOrganization())





