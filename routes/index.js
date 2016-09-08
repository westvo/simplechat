var express = require('express');
var router = express.Router();

var request = require("request")

/* GET home page. */
router.get('/', function(req, res, next) {

var url = "http://playground.finaldream.de/wp-json/wp/v2/"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
		res.json(body)
    }
});
  //res.render('index', { title: 'Express' });
});

module.exports = router;
