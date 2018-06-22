const express = require('express');
const nunjucks = require('nunjucks');
var config = require('./config/default');

var app = express();

port = config.port;

app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app
});

app.use('/static', express.static('public'))

require('./routes')(app);


app.listen(port, () => {
    console.log('server has been started on port' + port);
});
