/**
 * Created by walter on 2/14/14.
 */
/**
 * Module dependencies.
 */

var express = require('express')
    , http = require('http')
    , path = require('path')
    , jwt = require('jsonwebtoken')
    , expressJwt = require('express-jwt')
    ,secret = 'this is the secret for ats 1234'
    , resource = require('express-resource');

var app = express();

var Mongoose = require('mongoose');
var db = Mongoose.createConnection('localhost', 'ats');

// protect /api routes with JWT
app.use('/api', expressJwt({secret: secret}));

// all environments
app.set('port', process.env.PORT || 3000);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.json());
app.use(express.urlencoded());

// live reload - for debugging only (remove in production)
app.use(require('connect-livereload')({
    port: 35729,
    excludeList: ['.woff', '.flv']
}));

// development only
if ('production' == app.get('env')) {
    app.use(express.static(path.join(__dirname, '../app/dist')));
} else {
    app.use(express.static(path.join(__dirname, '../app/dist/')));
    app.use(express.errorHandler());
}

//models
var sysUsersModel = require('./models/SysUser');

// routes

app.get('/db/:action', require('./routes/db'));
app.post('/authenticate', require('./routes/authenticate'));



http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port %d in %s mode", app.get('port'), app.get('env'));
});