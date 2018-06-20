const express = require('express');
const nunjucks = require('nunjucks');
var app = express();

port = 8000;

app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app
});

app.use('/static', express.static('public'))


app.get('/', (req, res) => {
    
    res.render('home');
    console.log("Hello nunjuks....!");
});
app.get('/faq', (req, res) => {
    
    res.render('faq');
    console.log("Hello nunjuks....!");
});
app.get('/registration', (req, res) => {
    
    res.render('registration');
    console.log("Hello nunjuks....!");
});


app.listen(port, () => {
    console.log('server has been started on port' + port);
});
