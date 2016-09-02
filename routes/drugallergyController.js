var express = require('express');
var router = express.Router();

var DrugallergyDao = require('../models/drugallergyDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: Drugallergy');
});

router.post('/getDrugallergyByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  DrugallergyDao.getDrugallergyByCid(db, cid)
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