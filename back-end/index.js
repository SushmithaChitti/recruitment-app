var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var compression = require('compression');
var path = require('path');
var server = require('http').Server(app);
require('dotenv').config();

var models = require(path.resolve('models'));

// Middlewares
app.disable('x-powered-by');
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json();
});

require(path.resolve('routes/index'))(app);

models.sequelize
    .authenticate()
    .then(function() {
        models.sequelize.sync().then(function(db) {
            server.listen(process.env.APP_PORT, function() {
                console.log('App listening on : %s', process.env.APP_PORT);
            });
        });

    })
    .catch(function(err) {
        if (err) {
            console.log(err);
        }
    });

module.exports = app