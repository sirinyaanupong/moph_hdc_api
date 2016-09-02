var express = require('express');
var router = express.Router();

var EpiDao = require('../models/epiDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: epi');
});


router.get('/getEpi', function (req, res) {
  var db = req.db;

  EpiDao.getEpi(db)
    .then(function (rows) {
      // succes
      res.send({ ok: true, rows: rows });
    })
    .catch(function (err) {
      // error
      res.send({ ok: false, msg: err });
    });
  
});

router.post('/getEpiByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  EpiDao.getEpiByCid(db, cid)
    .then(function (rows) {
      // succes
      res.send({ ok: true, rows: rows });
    })
    .catch(function (err) {
      // error
      res.send({ ok: false, msg: err });
    });
  
});

router.post('/getEpiByGroupCid', function (req, res) {
  var db = req.db;
  var cids = req.body.cids; 

  EpiDao.getEpiByGroupCid(db, cids)
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