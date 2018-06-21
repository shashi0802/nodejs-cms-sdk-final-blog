const async = require('async');
var express = require('express');
var router = express.Router();
const request = require('request-promise');
// var app = express();

//Code for home route
router.get('/', (req, res) => {

    // const options = {
    //     method: 'GET',
    //     uri: 'https://cdn.contentstack.io/v3/content_types/header/entries/bltafb1e4dba1ec0661?api_key=blt610d3dc8e04d1ec7&access_token=blt9b73134d806fc7b4&environment=preview&locale=en-us&include_workflow=true'

    // }
    // request(options)
    //     .then(function (data) {
    //         // var data = {url:"https://images.contentstack.io/v3/assets/blt610d3dc8e04d1ec7/blte3a31295e3858eca/5b28a05fa528cb8f049e9616/logo.png"}
    //         data = JSON.parse(data);
    //         res.render('home', { data });
            
    //     })
    //     .catch(function (err) {
    //         if (err) {
    //             throw err;
    //         }
    //         // Something bad happened, handle the error
    //     })

    function httpGet(url, callback) {
        const options = {
          url :  url,
          json : true
        };
        request(options,
          function(err, res, data) {
            callback(err, data);
            
          }
        );
      }
      
      const urls= [
        "https://cdn.contentstack.io/v3/content_types/header/entries/bltafb1e4dba1ec0661?api_key=blt610d3dc8e04d1ec7&access_token=blt9b73134d806fc7b4&environment=preview&locale=en-us&include_workflow=true",
        "https://cdn.contentstack.io/v3/content_types/footer/entries/blt3d8e6591ebb4dbb8?api_key=blt610d3dc8e04d1ec7&access_token=blt9b73134d806fc7b4&environment=preview&locale=en-us&include_workflow=true",
        "https://cdn.contentstack.io/v3/content_types/home/entries/blte8f5193e6fc69eaa?api_key=blt610d3dc8e04d1ec7&access_token=blt9b73134d806fc7b4&environment=preview&locale=en-us&include_workflow=true"
      ];
      
      async.map(urls, httpGet, function (err, data){
        if (err) return console.log(err);
        console.log(typeof data);
        res.render('home',{data});
        
      });

    console.log("Hello nunjuks....! this is home");
});

module.exports = router;