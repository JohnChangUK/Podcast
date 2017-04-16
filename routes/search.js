var express = require('express');
var router = express.Router();
var superagent = require('superagent');

/* GET users listing. */
router.get('/:term', function(req, res, next) {
  var term = req.params.term;

// request iTunes search API
  var url = 'http://itunes.apple.com/search';

  superagent
  .get(url)
  .query({media: 'podcast', term: term})
  .set('Accept', 'application/json')
  .end(function(err, response) {
    if (err) {
      res.json({
      confirmation: 'Fail',
      message: err
    });

      return;
    }

    // console.log(JSON.stringify(response));

    var data = JSON.parse(response.text);

      res.json({
      confirmation: 'success',
      results: data.results
    });

  });

});

module.exports = router;
