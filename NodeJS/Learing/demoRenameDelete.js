var fs = require('fs');

// rename file 
// fs.rename('rename.txt', 'rename_sample.txt', function (err, data) {
//     if (err) throw err;
//     console.log('File name renamed');
// });

//delete file
fs.unlink('rename_sample.txt', function (err, data) {
    if (err) throw err;
    // console.log(data);
    console.log('rename_sample.txt file has been deleted..');
});
