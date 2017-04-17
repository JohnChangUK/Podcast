var express = require('express');
var router = express.Router();
var superagent = require('superagent');

/* GET users listing. */
router.get('/', function(req, res, next) {

  // var term = req.params.term;
  var url = req.query.url;
  if (url == null) {
    res.json({
      confirmation: 'Fail',
      message: 'Missing Feed Url'
    });

    return;
  }

  superagent
  .get(url)
  .query(null)
  .end(function(err, response) {
    if (err) {
      res.json({
      confirmation: 'Fail',
      message: err
    });

      return;
    }

    // console.log(JSON.stringify(response));
    res.send(response.text);
  });

});

module.exports = router;
