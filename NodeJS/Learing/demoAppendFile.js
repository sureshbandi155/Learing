var fs = require('fs');

// fs.writeFile('sample.txt', 'This is smaple text', function (err) {
//     if (err) throw err;
//     console.log('completed');

// });
// fs.appendFile('sample.txt', 'Good moring', function (err) {
//     if (err) throw err;
//     console.log('saved..!');

// });

let str = 'hi all good morning';
let num = 10;
fs.open('sample.txt', 'w+', function (err, f) {
    if (err) {
        return console.log(err);
    }
    fs.writeFile(f, str, function (err) {
        if (err) throw err
        console.log('data saved');
        // console.log(str);
    });
    console.log('file opended');
})

