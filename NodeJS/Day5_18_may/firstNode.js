let http = require("http");

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('This is sample\n');
}).listen(9000);

// Console will print the message
console.log('Server running at http://127.0.0.1:9000/');

// Blocking 
var fs = require('fs');
var data = fs.readFileSync('sample.txt');
console.log(data.toString());
console.log('Program ended');

//non Blocking 
// var fs = require('fs');
fs.readFile('sample.txt', (err, data) => {
    if (err) return console.log(err);
    console.log(data.toString());
});

console.log('Non blocking Program ended:');

// os module 
let os = require('os');
console.log('os.freemem():\n', os.freemem());
console.log('os.homedir():\n', os.homedir());
console.log('os.hostname():\n', os.hostname());
console.log('os.platform():\n', os.platform());
console.log('os.release():\n', os.release());
console.log('os.tmpdir():\n', os.tmpdir());
console.log('os.totalmem():\n', os.totalmem());
console.log('os.type():\n', os.type());