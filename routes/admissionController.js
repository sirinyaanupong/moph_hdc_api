var express = require('express');
var router = express.Router();

var AdmissionDao = require('../models/admissionDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: Admission');
});

router.post('/getAdmissionByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  AdmissionDao.getAdmissionByCid(db, cid)
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