var express = require('express');
var router = express.Router();

var Drug_opdDao = require('../models/drug_opdDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: Drug_opd');
});

router.post('/getDrug_opdByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  Drug_opdDao.getDrug_opdByCid(db, cid)
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