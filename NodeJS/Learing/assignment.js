var fs = require('fs');

// 1  

console.log('Going to check a file type');
fs.stat('output.txt', function (error, status) {
    if (error) {
        console.log(error);
    }
    console.log(status);
    console.log('success..!!');
    console.log('isFile ? ' + status.isFile());

});

// 2.
var data = '';
var readerStream = fs.createReadStream('streams.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function (chuck) {
    data += chuck;
})

readerStream.on('end', function () {
    console.log(data);
})

readerStream.on('error', function (err) {
    console.log(err.stack);
})
// console.log('program ended');
