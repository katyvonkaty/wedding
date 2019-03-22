var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('omg', { title: 'HEre we go' });
});


module.exports = router;
