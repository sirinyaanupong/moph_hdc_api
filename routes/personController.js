var express = require('express');
var router = express.Router();

var PersonDao = require('../models/personDao');

router.get('/', function(req, res, next) {
  res.send('respond with a resource: person');
});

router.get('/getPerson', function (req, res) {
  var db = req.db;

  PersonDao.getPerson(db)
    .then(function (rows) {
      // succes
      res.send({ ok: true, rows: rows });
    })
    .catch(function (err) {
      // error
      res.send({ ok: false, msg: err });
    });
  
});

router.post('/getPersonByCid', function (req, res) {
  var db = req.db;
  var cid = req.body.cid; 

  PersonDao.getPersonByCid(db, cid)
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