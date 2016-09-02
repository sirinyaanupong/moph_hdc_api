var express = require('express');
var router = express.Router();

var PrenatalDao = require('../models/prenatalDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: Prenatal');
});

router.post('/getPrenatalByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  PrenatalDao.getPrenatalByCid(db, cid)
    .then(function (rows) {
      // succes
      res.send({ ok: true, rows: rows });
    })
    .catch(function (err) {
      // error
      res.send({ ok: false, msg: err });
    });
  
});

router.post('/getPrenatalByGroupCid', function (req, res) {
  var db = req.db;
  // var cids = ['3160101563926', '3160101564728'];
  var cids = req.body.cids;

  PrenatalDao.getPrenatalByGroupCid(db, cids)
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