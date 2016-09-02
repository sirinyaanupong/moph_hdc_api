var express = require('express');
var router = express.Router();

var FunctionalDao = require('../models/functionalDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: functional');
});

router.post('/getFunctionalByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  FunctionalDao.getFunctionalByCid(db, cid)
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