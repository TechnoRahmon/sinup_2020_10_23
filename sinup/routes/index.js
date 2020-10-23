var express = require('express');
var router = express.Router();
var path= require('path')



/* GET singup page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname+'/singup.html');
  
});

module.exports = router;
