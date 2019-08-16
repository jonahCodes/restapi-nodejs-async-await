var express = require('express');
var router = express.Router();
const Apartment = require('../models/apartment');

// GET home page.
router.get('/', function(req, res) {

  Apartment.find({}, function(err, allApt) {
    if (err) { console.log(err); }
    else {
      res.render("index", { apt: allApt, page: "apartments"});  
    }
});
});

module.exports = router;
