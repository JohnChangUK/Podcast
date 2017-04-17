var express = require('express');
var router = express.Router();
var superagent = require('superagent');
var xml2js = require('xml2js');

router.get('/', function(req, res, next) {

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
    
    var xml = response.text;

    xml2js.parseString(xml, function (err, result) {
        // console.dir(result);
        var rss = result.rss;
        var channel = rss.channel;
        if (channel.length > 0)
          channel = channel[0];

        res.json({
          confirmation: 'Success',
          podcast: channel
        });
    });

    // res.send(response.text);
  });

});

module.exports = router;
