class Laptop
{
    constructor(brand,price)
    {
        this._laptopBrand=brand;
        this._laptopPrice=price;

    }

    get laptopBrand() //retrieve the value stored in the underlying variable
    {
        return this._laptopBrand
    }

    set laptopBrand(lb) // assign value to the underlying variable
    {
    this._laptopBrand=lb
    }

    }

let myLaptop=new Laptop("HP",52000)
console.log(myLaptop.laptopBrand) // get is called
myLaptop.laptopBrand="Dell" // set is called
console.log(myLaptop.laptopBrand) // get is called
