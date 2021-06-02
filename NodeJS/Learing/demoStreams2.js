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
var somedata = 'welcome to the world of streams';


// create a writable stream 

var writeStream = fs.createWriteStream('sample.txt');

//write the data to the stream with encoding uft8
writeStream.write(somedata, 'UTF8');

//marks the end of files
writeStream.end();

// handle stream event like finish and error 
writeStream.on('finish', function () {
    console.log('Write completed')
})

writeStream.on('error', function (err) {
    console.log(err.stack);
})
console.log('program ended');
