var express = require('express');
var router = express.Router();

var Community_serviceDao = require('../models/community_serviceDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: community_service');
});

router.post('/getCommunity_serviceByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  Community_serviceDao.getCommunity_serviceByCid(db, cid)
    .then(function (rows) {
      // succes
      res.send({ ok: true, rows: rows });
    })
    .catch(function (err) {
      // error
      res.send({ ok: false, msg: err });
    });
  
});

module.exports = router;