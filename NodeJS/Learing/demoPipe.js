// In angular framework pipe | which is used to transform the output 

var fs = require('fs');
// create a readable stream 
var readerStream = fs.createReadStream('sample.txt');

// create a writable stream 
var writeStream = fs.createWriteStream('output.txt');

// pipe that reads the write operation 
readerStream.pipe(writeStream);

console.log('program ended');
