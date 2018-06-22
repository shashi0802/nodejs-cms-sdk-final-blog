//const async = require('async');
var express = require('express');
var router = express.Router();

var Stack = require('../models/contentStack');

router.get('/', (req, res) => {

  const Query = Stack.ContentType('home').Query();
  Query
    .toJSON()
    .find()
    .spread(function success(data) {
      //console.log(entry.title)
      res.render('home', { entry:data[0]});
    }, function error(err) {
      // err object
      throw err;
    });
  console.log("Hello nunjuks....! this is home");
});

module.exports = router;