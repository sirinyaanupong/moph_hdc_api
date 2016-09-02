var express = require('express');
var router = express.Router();

var CardDao = require('../models/cardDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: card');
});

router.post('/getCardByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  CardDao.getCardByCid(db, cid)
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