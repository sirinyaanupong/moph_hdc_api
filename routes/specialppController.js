var express = require('express');
var router = express.Router();

var SpecialppDao = require('../models/specialppDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: Specialpp');
});

router.post('/getSpecialppByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  SpecialppDao.getSpecialppByCid(db, cid)
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