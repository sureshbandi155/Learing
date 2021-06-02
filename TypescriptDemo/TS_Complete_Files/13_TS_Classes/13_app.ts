interface Car{
    specification():string;
}

class BMW implements Car{

    private _color:string;
    private _engineCapacity:string;
    private _fuel:string;
    private _rpm:string;

    constructor(color: string, engineCapacity: string, fuel: string, rpm: string) {
        this._color = color;
        this._engineCapacity = engineCapacity;
        this._fuel = fuel;
        this._rpm = rpm;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get engineCapacity(): string {
        return this._engineCapacity;
    }

    set engineCapacity(value: string) {
        this._engineCapacity = value;
    }

    get fuel(): string {
        return this._fuel;
    }

    set fuel(value: string) {
        this._fuel = value;
    }

    get rpm(): string {
        return this._rpm;
    }

    set rpm(value: string) {
        this._rpm = value;
    }

    public specification():string{
        let spec:string = '';
        spec = `Fuel : ${this.fuel} 
                Engine Capacity : ${this.engineCapacity}
                Color : ${this.color}
                RPM : ${this.rpm}`;
        return spec;
    }
}

// Object Creation
let car1 = new BMW('white','2000CC','Diesel','8000RPM');
let carSpec = car1.specification();
console.log(carSpec);

// Setter method of BMW Class
car1.fuel = 'Petrol';
carSpec = car1.specification();
console.log(carSpec);

