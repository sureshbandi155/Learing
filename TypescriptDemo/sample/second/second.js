var gretting = function () { return 'Hello...'; };
console.log(gretting());

var gretting1 = function (id, name) {
    return "user name " + id + " and name " + name;
};
console.log(gretting1(124491, 'suresh'));
var gretting2 = function (id, name) {
    if (name === void 0) { name = 'default name'; }
    return "user name " + id + " and name " + name;
};
console.log(gretting2(124491));
