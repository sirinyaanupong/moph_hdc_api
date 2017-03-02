var express = require('express');
var router = express.Router();

var MCD = require('../models/moph-mcd');

router.get('/provice', function (req, res) {
    var db = req.db;

    MCD.getProvice(db)
        .then(function (rows) {
            res.send({ rows });
        })
        .catch(function (err) {
            res.send({ err });
        });
});

router.get('/amphoe', function (req, res) {
    var db = req.db;
    var provice = req.param('provice');

    MCD.getAmphoeByProvice(db, provice)
        .then(function (rows) {
            res.send({ rows });
        })
        .catch(function (err) {
            res.send({ err });
        });
});

router.get('/tambon', function (req, res) {
    var db = req.db;
    var provice = req.param('provice');
    var amphoe = req.param('provice')+req.param('amphoe');

    MCD.getTumbonByAmphoeAndProvice(db, provice, amphoe)
        .then(function (rows) {
            res.send({ rows });
        })
        .catch(function (err) {
            res.send({ err });
        });
});

module.exports = router;