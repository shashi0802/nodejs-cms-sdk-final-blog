var express = require('express');
var router = express.Router();


var Stack = require('../models/contentStack');

router.get('/', (req, res) => {

  
  const Query = Stack.ContentType('registration').Query();
 
  Query
    .toJSON()
    .find()
    .spread(function success(data) {
      //console.log(entry.title)
      res.render('registration',{entry:data[0]});
    }, function error(err) {
      // err object
    });
  

  // res.render('registration');
  console.log("Hello nunjuks....! this is registration");
});

module.exports = router;