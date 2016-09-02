var express = require('express');
var router = express.Router();

var Diagnosis_opdDao = require('../models/diagnosis_opdDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: Diagnosis_opd');
});

router.post('/getDiagnosis_opdByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  Diagnosis_opdDao.getDiagnosis_opdByCid(db, cid)
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