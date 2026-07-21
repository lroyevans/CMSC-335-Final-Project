var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dealership/', function(req, res, next) {
    
   
    res.json({info:"All good!"});
});

module.exports = router;