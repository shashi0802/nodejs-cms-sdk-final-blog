const express = require('express');
const nunjucks = require('nunjucks');
const request = require('request-promise');
var route = require('./routes/index');

var app = express();

port = 8090;

app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app
});

app.use('/static', express.static('public'))

app.use('/',route.home);
app.use('/',route.faq);
app.use('/',route.registration);



app.listen(port, () => {
    console.log('server has been started on port' + port);
});
