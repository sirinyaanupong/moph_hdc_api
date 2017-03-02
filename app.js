var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var epi = require('./routes/epiController');
var person = require('./routes/personController');
var address = require('./routes/addressController');
var card = require('./routes/cardController');
var drugallergy = require('./routes/drugallergyController');
var functional = require('./routes/functionalController');
var diagnosis_opd = require('./routes/diagnosis_opdController');
var drug_opd = require('./routes/drug_opdController');
var admission = require('./routes/admissionController');
var drug_ipd = require('./routes/drug_ipdController');
var prenatal = require('./routes/prenatalController');
var anc = require('./routes/ancController');
var specialpp = require('./routes/specialppController');
var community_service = require('./routes/community_serviceController');

var nmpcd_mapping = require('./routes/nmpcd_mapping');
var moph_mcd = require('./routes/moph-mcd');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// var db = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: '203.157.103.38',
//     port: 3306,
//     database: 'hdc',
//     user: 'nar009',
//     password: '123456'
//   }
// });

var db = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    database: 'moph-mcd',
    user: 'root',
    password: 'root'
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  req.db = db;
  next();
});

app.use('/', routes);
app.use('/users', users);
app.use('/epi', epi);
app.use('/person', person);
app.use('/address', address);
app.use('/card', card);
app.use('/drugallergy', drugallergy);
app.use('/functional', functional);
app.use('/diagnosis_opd', diagnosis_opd);
app.use('/drug_opd', drug_opd);
app.use('/admission', admission);
app.use('/drug_ipd', drug_ipd);
app.use('/prenatal', prenatal);
app.use('/anc', anc);
app.use('/specialpp', specialpp);
app.use('/community_service', community_service);

app.use('/api/nmpcd', nmpcd_mapping);
app.use('/api/mcd', moph_mcd);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
