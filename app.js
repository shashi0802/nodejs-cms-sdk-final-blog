const express = require('express');
const nunjucks = require('nunjucks');
const request = require('request-promise');
var app = express();

port = 8090;

app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app
});

app.use('/static', express.static('public'))

// starting from here-------
// const options = {
//     method: 'GET',
//     uri: 'https://cdn.contentstack.io/v3/content_types/header/entries/bltafb1e4dba1ec0661?api_key=blt610d3dc8e04d1ec7&access_token=blt9b73134d806fc7b4&environment=preview&locale=en-us&include_workflow=true'

// }
// request(options)
//     .then(function (data) {
//         response.render('home',{result:data});
//         // Request was successful, use the response object at will
//     })
//     .catch(function (err) {
//         if(err){
//             throw err;
//         }
//         // Something bad happened, handle the error
//     })

//----------------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {

    const options = {
        method: 'GET',
        uri: 'https://cdn.contentstack.io/v3/content_types/header/entries/bltafb1e4dba1ec0661?api_key=blt610d3dc8e04d1ec7&access_token=blt9b73134d806fc7b4&environment=preview&locale=en-us&include_workflow=true'
    
    }
    request(options)
        .then(function (data) {
           // var data = {url:"https://images.contentstack.io/v3/assets/blt610d3dc8e04d1ec7/blte3a31295e3858eca/5b28a05fa528cb8f049e9616/logo.png"}
            data = JSON.parse(data);
            res.render('home',{data});
           // console.log(data);
            // Request was successful, use the response object at will
        })
        .catch(function (err) {
            if(err){
                throw err;
            }
            // Something bad happened, handle the error
        })
    // res.render('home');
     //console.log("Hello nunjuks....!");
});
app.get('/faq', (req, res) => {

    const options = {
        method: 'GET',
        uri: 'https://cdn.contentstack.io/v3/content_types/header/entries/bltafb1e4dba1ec0661?api_key=blt610d3dc8e04d1ec7&access_token=blt9b73134d806fc7b4&environment=preview&locale=en-us&include_workflow=true'
    
    }
    request(options)
        .then(function (data) {
           // var data = {url:"https://images.contentstack.io/v3/assets/blt610d3dc8e04d1ec7/blte3a31295e3858eca/5b28a05fa528cb8f049e9616/logo.png"}
            data = JSON.parse(data);
            res.render('faq',{data});
           // console.log(data);
            // Request was successful, use the response object at will
        })
        .catch(function (err) {
            if(err){
                throw err;
            }
            // Something bad happened, handle the error
        })

    // res.render('faq');
    console.log("Hello nunjuks....!");
});
app.get('/registration', (req, res) => {

    const options = {
        method: 'GET',
        uri: 'https://cdn.contentstack.io/v3/content_types/header/entries/bltafb1e4dba1ec0661?api_key=blt610d3dc8e04d1ec7&access_token=blt9b73134d806fc7b4&environment=preview&locale=en-us&include_workflow=true'
    
    }
    request(options)
        .then(function (data) {
           // var data = {url:"https://images.contentstack.io/v3/assets/blt610d3dc8e04d1ec7/blte3a31295e3858eca/5b28a05fa528cb8f049e9616/logo.png"}
            data = JSON.parse(data);
            res.render('registration',{data});
           // console.log(data);
            // Request was successful, use the response object at will
        })
        .catch(function (err) {
            if(err){
                throw err;
            }
            // Something bad happened, handle the error
        })

    // res.render('registration');
    console.log("Hello nunjuks....!");
});


app.listen(port, () => {
    console.log('server has been started on port' + port);
});
