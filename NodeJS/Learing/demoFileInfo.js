var fs = require('fs');
console.log('Going to get a file info');
fs.stat('sample.txt', function (error, status) {
    if (error) {
        console.log(error);
    }
    console.log(status);
    console.log('success..!!');
    console.log('isFile ? ' + status.isFile());
    console.log('Directory: ' + status.isDirectory());
    console.log('Size: ' + status.size);

})
