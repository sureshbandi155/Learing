//follow this article to get idea https://medium.com/developers-arena/streams-and-buffers-in-nodejs-30ff53edd50f

//readable, writable, duplex, transform
//streams are instance of eventemitters, deals with 4 types of event
/*
data: event, if some data exists to read
end: event, reached end of the file
error: event, errors,while reading and writting
finish: event, flush the underlying system

*/
var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('sample.txt');

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
console.log('program ended');
