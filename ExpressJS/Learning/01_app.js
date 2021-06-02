var express = require('express');
var bodyParser = require('body-parser');
const { response } = require('express');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.send('Hey I\'m from GET request');
});
app.post('/users', urlencodedParser, (req, res) => {
    formData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(formData);
    res.end(JSON.stringify(formData));
    // res.send('Hey I\'m from POST request');
});
app.put('/users-put', (req, res) => {
    res.send('Hey I\'m from put request');
});
app.delete('/users-del', (req, res) => {
    res.send('Hey I\'m from delete request');
});
app.listen(8000, () => console.log(`Server has started in the port of 8000`));