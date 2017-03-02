var express = require('express');
var router = express.Router();

var NMPCD = require('../models/nmpcd_mapping');

router.get('/dc24/search', function (req, res) {
  var db = req.db;
  var query = `%${req.param('query')}%`;

  NMPCD.getDc24ByQuery(db, query)
    .then(function (rows) {
      res.send({ rows });
    })
    .catch(function (err) {
      res.send({ err });
    });
});

router.get('/tp/search', function (req, res) {
  var db = req.db;
  var query = `%${req.param('query')}%`;

  NMPCD.getTpByQuery(db, query)
    .then(function (rows) {
      res.send({ rows });
    })
    .catch(function (err) {
      res.send({ err });
    });
});

router.post('/dc24ToTp/insert', function (req, res) {
  var db = req.db;
  var stdCode = req.body.stdCode;
  var tpId = req.body.tpId;

  NMPCD.insertDc24ToTp(db, stdCode, tpId)
    .then(function (rows) {
      res.send({ ok: true, rows: rows });
    })
    .catch(function (err) {
      res.send({ ok: false, msg: err });
    });

});

router.post('/dc24ToTp/update', function (req, res) {
  var db = req.db;
  var stdCode = req.body.stdCode;
  var tpId = req.body.tpId;
  var confirm = req.body.confirm;

  NMPCD.updateDc24ToTp(db, stdCode, tpId, confirm)
    .then(function (rows) {
      res.send({ ok: true, rows: rows });
    })
    .catch(function (err) {
      res.send({ ok: false, msg: err });
    });

});

router.post('/dc24ToTp/delete', function (req, res) {
  var db = req.db;
  var stdCode = req.body.stdCode;
  var tpId = req.body.tpId;

  NMPCD.deleteDc24ToTp(db, stdCode, tpId)
    .then(function (rows) {
      res.send({ ok: true, rows: rows });
    })
    .catch(function (err) {
      res.send({ ok: false, msg: err });
    });

});

router.get('/labeler/search', function (req, res) {
  var db = req.db;

  NMPCD.searchLabeler(db)
    .then(function (rows) {
      res.send({ rows });
    })
    .catch(function (err) {
      res.send({ err });
    });
});

router.get('/labeler/get', function (req, res) {
  var db = req.db;
  var id = req.param('id');

  NMPCD.getLabelerById(db, id)
    .then(function (rows) {
      res.send({ rows });
    })
    .catch(function (err) {
      res.send({ err });
    });
});

router.get('/organization/get', function (req, res) {
  var db = req.db;
  var id = req.param('id');

  NMPCD.getOrganizationById(db, id)
    .then(function (rows) {
      res.send({ rows });
    })
    .catch(function (err) {
      res.send({ err });
    });
});

router.post('/labeler/save', function (req, res) {
  let db = req.db;
  let strlabelerid = req.body.strlabelerid;
  let strlabelername = req.body.strlabelername;
  let strdescription = req.body.strdescription;
  let strnin = req.body.strnin;
  let strlabelertype = req.body.strlabelertype;
  let strstatus = req.body.strstatus;
  let strdisabledate = req.body.strdisabledate?req.body.strdisabledate:null;
  let straddress = req.body.straddress;
  let strtumbon = req.body.strtumbon;
  let stramphoe = req.body.stramphoe;
  let strprovice = req.body.strprovice;
  let strzipcode = req.body.strzipcode;
  let strphone = req.body.strphone;
  let strurl = req.body.strurl;
  debugger;
  if (strlabelerid) {
    NMPCD.insertLabeler(db, strlabelerid, strlabelername, strdescription, strnin,
      strlabelertype, strstatus, strdisabledate, straddress, strtumbon,
      stramphoe, strprovice, strzipcode, strphone, strurl)
      .then(function (rows) {
        res.send({ ok: true, rows: rows });
      })
      .catch(function (err) {
        console.log(err)
        res.status(500).send(err);
      });
  } else {
    res.status(500).send('Data incomplete');
  }

});

router.post('/labeler/update', function (req, res) {
  let db = req.db;
  let strlabelerid = req.body.strlabelerid;
  let strlabelername = req.body.strlabelername;
  let strdescription = req.body.strdescription;
  let strnin = req.body.strnin;
  let strlabelertype = req.body.strlabelertype;
  let strstatus = req.body.strstatus;
  let strdisabledate = req.body.strdisabledate;
  let straddress = req.body.straddress;
  let strtumbon = req.body.strtumbon;
  let stramphoe = req.body.stramphoe;
  let strprovice = req.body.strprovice;
  let strzipcode = req.body.strzipcode;
  let strphone = req.body.strphone;
  let strurl = req.body.strurl;

  if (strlabelerid) {
    NMPCD.updateLabeler(db, strlabelerid, strlabelername, strdescription, strnin,
      strlabelertype, strstatus, strdisabledate, straddress, strtumbon,
      stramphoe, strprovice, strzipcode, strphone, strurl)
      .then(function (rows) {
        res.send({ ok: true, rows: rows });
      })
      .catch(function (err) {
        res.send({ ok: false, msg: err });
      });
  } else {
    res.send({ ok: false, error: 'Data incomplete' });
  }

});

router.post('/organization/save', function (req, res) {
  let db = req.db;
  let strlabelerid = req.body.strlabelerid;
  let strorgno = req.body.strorgno;
  let stryearregister = req.body.stryearregister;
  let stryearestablished = req.body.stryearestablished;
  let strcountry = req.body.strcountry;
  let strfdanumber = req.body.strfdanumber;
  let strlatitude = req.body.strlatitude;
  let strlongitude = req.body.strlongitude;

  if (strlabelerid) {
    NMPCD.insertOrganization(db, strlabelerid, strorgno, stryearregister, stryearestablished,
		strcountry, strfdanumber, strlatitude, strlongitude)
      .then(function (rows) {
        res.send({ ok: true, rows: rows });
      })
      .catch(function (err) {
        res.send({ ok: false, msg: err });
      });
  } else {
    res.send({ ok: false, error: 'Data incomplete' });
  }

});

router.post('/organization/update', function (req, res) {
  let db = req.db;
  let strlabelerid = req.body.strlabelerid;
  let strorgno = req.body.strorgno;
  let stryearregister = req.body.stryearregister;
  let stryearestablished = req.body.stryearestablished;
  let strcountry = req.body.strcountry;
  let strfdanumber = req.body.strfdanumber;
  let strlatitude = req.body.strlatitude;
  let strlongitude = req.body.strlongitude;

  if (strlabelerid) {
    NMPCD.updateOrganization(db, strlabelerid, strorgno, stryearregister, stryearestablished,
		strcountry, strfdanumber, strlatitude, strlongitude)
      .then(function (rows) {
        res.send({ ok: true, rows: rows });
      })
      .catch(function (err) {
        res.send({ ok: false, msg: err });
      });
  } else {
    res.send({ ok: false, error: 'Data incomplete' });
  }

});

module.exports = router;