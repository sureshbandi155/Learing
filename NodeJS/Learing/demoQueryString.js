var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);

    var qstr = url.parse(req.url, true).query;
    var txt = `Name: ${qstr.name} and Age is: ${qstr.age}`;
    res.end(txt);
    console.log(`${qstr.name} and ${qstr.age}`);
}).listen(8080, () => console.log('serer strated'));

// http://localhost:8080/?name='suresh'&age='12'