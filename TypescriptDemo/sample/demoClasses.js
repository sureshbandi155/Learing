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
var User = /** @class */ (function () {
    function User(id, name, city) {
        this.userId = id;
        this.userName = name;
        this.usercity = city;
    }
    User.prototype.display = function () {
        console.log("id: " + this.userId + " and " + this.userName + " and " + this.usercity);
    };
    return User;
}());
;
var user1 = new User(124491, 'suresh', 'tirupati');
user1.display();
//inheritance
var PriviledgedUser = /** @class */ (function (_super) {
    __extends(PriviledgedUser, _super);
    function PriviledgedUser(points, id, name, city) {
        var _this = _super.call(this, id, name, city) || this;
        _this.points = points;
        return _this;
    }
    PriviledgedUser.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log('available points are' + this.points);
    };
    return PriviledgedUser;
}(User));
var specialUser = new PriviledgedUser(100, 124491, 'test', 'test');
specialUser.display();
