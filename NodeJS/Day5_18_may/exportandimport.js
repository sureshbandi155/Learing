var http = require('http');
var date = require('./datemodule');
http.createServer(function (res, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Today Date is: ' + date.myDateTime() + '\n');
    res.write('Date only: ' + date.myDateOnly() + '\n');
    // res.write('Time only: ' + date.myTimeOnly() + '\n');
    res.write('Name from external module is: ' + date.myName() + '\n');
    res.end('Thank you');
    console.log(new Date().toLocaleDateString());
}).listen(8000, () => console.log('server started at 8000 port'));