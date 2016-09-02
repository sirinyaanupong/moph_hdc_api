var express = require('express');
var router = express.Router();

var Drug_ipdDao = require('../models/drug_ipdDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: Drug_ipd');
});

router.post('/getDrug_ipdByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  Drug_ipdDao.getDrug_ipdByCid(db, cid)
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