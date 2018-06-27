var express = require('express');
var router = express.Router();


var Stack = require('../models/contentStack');

router.get('/', function (req, res) {
  Stack.ContentType('blog').Query()
    .toJSON()
    .find()
    .spread(function success(data) {
      console.log("---------+++++++++",data)
      console.log("---------+++++++++")

      res.render('blogslist', { entries: data })
    })
})

router.get('/:title', function (req, res) {
  console.log(req.params.title)
  Stack.ContentType('blog').Query()
    .where('title', req.params.title)
    .toJSON()
    .find()
    .spread(function success(data) {
      console.log("--------", data[0])
      res.render('blog', { entry: data[0] })
    })
})

module.exports = router;