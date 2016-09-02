var express = require('express');
var router = express.Router();

var AncDao = require('../models/ancDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: Anc');
});

router.post('/getAncByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  AncDao.getAncByCid(db, cid)
    .then(function (rows) {
      // succes
      res.send({ ok: true, rows: rows });
    })
    .catch(function (err) {
      // error
      res.send({ ok: false, msg: err });
    });
  
});

router.post('/getAncByPeriod', function (req, res) {
  var db = req.db;
  var startDate = req.body.startDate; 
  var endDate = req.body.endDate;

  console.log('startDate: '+startDate);

  AncDao.getAncByPeriod(db, startDate, endDate)
    .then(function (rows) {
      // succes
      res.send({ ok: true, rows: rows[0] });
    })
    .catch(function (err) {
      // error
      res.send({ ok: false, msg: err });
    });
  
});

module.exports = router;