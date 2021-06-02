var BMW = (function () {
    function BMW(color, engineCapacity, fuel, rpm) {
        this._color = color;
        this._engineCapacity = engineCapacity;
        this._fuel = fuel;
        this._rpm = rpm;
    }
    Object.defineProperty(BMW.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BMW.prototype, "engineCapacity", {
        get: function () {
            return this._engineCapacity;
        },
        set: function (value) {
            this._engineCapacity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BMW.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        set: function (value) {
            this._fuel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BMW.prototype, "rpm", {
        get: function () {
            return this._rpm;
        },
        set: function (value) {
            this._rpm = value;
        },
        enumerable: true,
        configurable: true
    });
    BMW.prototype.specification = function () {
        var spec = '';
        spec = "Fuel : " + this.fuel + " \n                Engine Capacity : " + this.engineCapacity + "\n                Color : " + this.color + "\n                RPM : " + this.rpm;
        return spec;
    };
    return BMW;
}());
// Object Creation
var car1 = new BMW('white', '2000CC', 'Diesel', '8000RPM');
var carSpec = car1.specification();
console.log(carSpec);
// Setter method of BMW Class
car1.fuel = 'Petrol';
carSpec = car1.specification();
console.log(carSpec);
