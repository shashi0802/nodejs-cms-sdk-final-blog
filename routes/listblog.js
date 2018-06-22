var express = require('express');
var router = express.Router();


var Stack = require('../models/contentStack');

router.get('/', (req, res) => {

  
  const Query = Stack.ContentType('listblog').Query();
 
  Query
    .toJSON()
    .find()
    .spread(function success(data) {
      //console.log(entry.title)
      res.render('listblog',{entry:data[0]});
    }, function error(err) {
      // err object
    });
  console.log("Hello nunjuks....! this is listblog page");
});

module.exports = router;