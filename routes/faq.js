//const async = require('async');
var express = require('express');
var router = express.Router();
//const cstack = require('contentstack');

var Stack = require('../models/contentStack');


router.get('/', (req, res) => {
  const Query = Stack.ContentType('faq').Query();
  Query
    .toJSON()
    .find()
    .spread(function success(data) {
      //console.log(entry.title)
      res.render('faq', { entry: data[0] });
    }, function error(err) {
      // err object
      throw err;
    });

  console.log("Hello nunjuks....! this faq");
});

module.exports = router;