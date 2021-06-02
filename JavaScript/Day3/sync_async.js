function doSomething(someFun) {
    someFun();
    console.log('call fisrst');
}
doSomething(function () {
    console.log('done');
});
console.log('call second');

// async mode 
console.log('async....');
var clear;
function doSomethingAsncy(someFun) {
    clear = setTimeout(someFun, 3000);
    console.log('call fisrst');
}
doSomethingAsncy(function () {
    console.log('done');
});
console.log('call second');
clearTimeout(clear);
alert('cleard setTimeout..!');