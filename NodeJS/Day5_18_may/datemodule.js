exports.myDateTime = function () {
    return Date();
}
exports.myDateOnly = function () {
    let dateOnly = new Date().toLocaleDateString;
    return dateOnly;
}
// exports.myTimeOnly = function () {
//     return Date().toLocaleTimeString;
// }
exports.myName = function () {
    return 'Test Name';
}