var express = require('express');
var router = express.Router();

var AddressDao = require('../models/addressDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: address');
});

router.post('/getAddressByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  AddressDao.getAddressByCid(db, cid)
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