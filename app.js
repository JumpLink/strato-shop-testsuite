var express = require('express');

var port = parseInt(process.argv.pop());
var app = express.createServer();
app.configure(function() {
    app.use(express.bodyParser());
    app.use(app.router);
});

app.set('view engine', 'jshtml');
app.get('/', function(req, res) { res.render('startseite', {}); });
app.get('messer', function(req, res) { res.render('messer', {}); });
app.get('musik', function(req, res) { res.render('musik', {}); });
app.get('schloesser', function(req, res) { res.render('schloesser', {}); });
app.get('stifte', function(req, res) { res.render('stifte', {}); });
app.get('taschenlampen', function(req, res) { res.render('taschenlampen', {}); });
app.get('tiere', function(req, res) { res.render('tiere', {}); });
app.get('unterwegs', function(req, res) { res.render('unterwegs', {}); });
app.get('visitenkarten', function(req, res) { res.render('visitenkarten', {}); });
app.get('zippos', function(req, res) { res.render('zippos', {}); });

app.listen(port);