var express = require('express');
// var fetchUrl = require("fetch").fetchUrl;
var jsdom = require("jsdom");
var fs = require("fs");
// var $ = require('jquery');

var port = parseInt(process.argv.pop());
var app = express.createServer();
app.configure(function() {
	app.use(express.static(__dirname + '/public'));
    app.use(express.bodyParser());
    app.use(app.router);
});

// fetchUrl("http://www.wunschgravur.de/", function(error, meta, body){
//     console.log(body.toString());
//     //$(".CategoryList").html("<b>test jea!</b>");
// });

function render(filename, res) {
	fs.readFile("./views/"+filename, 'utf8', function(err, data) {
		if (err) throw err;
		console.log(data);
		jsdom.env({
		  html: "http://www.wunschgravur.de/",
		  scripts: ["http://code.jquery.com/jquery.js"],
		  done: function (errors, window) {
		    var $ = window.$;
			$(".CategoryList").html(data);
			var html = $("html").html();
			res.send(html);
		  }
		});
	})
}

//app.set('view engine', 'jshtml');

app.get('/', function(req, res) { render("index.html", res) });
app.get('/startseite', function(req, res) { render("startseite.html", res); });
app.get('/messer', function(req, res) { render("messer.html", res); });
app.get('/musik', function(req, res) { render("musik.html", res); });
app.get('/schloesser', function(req, res) { render("schloesser.html", res); });
app.get('/stifte', function(req, res) { render("stifte.html", res); });
app.get('/taschenlampen', function(req, res) { render("taschenlampen.html", res); });
app.get('/tiere', function(req, res) { render("tiere.html", res); });
app.get('/unterwegs', function(req, res) { render("unterwegs.html", res); });
app.get('/visitenkarten', function(req, res) { render("visitenkarten.html", res); });
app.get('/zippos', function(req, res) { render("zippos.html", res); });
app.get('/holz', function(req, res) { render("holz.html", res); });
app.get('/zuhause', function(req, res) { render("zuhause.html", res); });
app.get('/fahrzeuge', function(req, res) { render("fahrzeuge.html", res); });
app.get('/kinderbesteck', function(req, res) { render("kinderbesteck.html", res); });

/* Content Only */
app.get('/content', function(req, res) { res.render('index', {title: "Startseite"}) });
app.get('/startseite/content', function(req, res) { res.render('startseite', {title: "Startseite"}); });
app.get('/messer/content', function(req, res) { res.render('messer', {title: "Messer"}); });
app.get('/musik/content', function(req, res) { res.render('musik', {title: "Musik"}); });
app.get('/schloesser/content', function(req, res) { res.render('schloesser', {title: "Schloesser"}); });
app.get('/stifte/content', function(req, res) { res.render('stifte', {title: "Stifte"}); });
app.get('/taschenlampen/content', function(req, res) { res.render('taschenlampen', {title: "Taschenlampen"}); });
app.get('/tiere/content', function(req, res) { res.render('tiere', {title: "Tiere"}); });
app.get('/unterwegs/content', function(req, res) { res.render('unterwegs', {title: "Unterwegs"}); });
app.get('/visitenkarten/content', function(req, res) { res.render('visitenkarten', {title: "Visitenkarten"}); });
app.get('/zippos/content', function(req, res) { res.render('zippos', {title: "Zippos"}); });
app.get('/holz/content', function(req, res) { res.render('holz', {title: "Holz"}); });
app.get('/zuhause/content', function(req, res) { res.render('zuhause', {title: "Zu Hause"}); });
app.get('/fahrzeuge/content', function(req, res) { res.render('fahrzeuge', {title: "Fahrzeuge"}); });
app.get('/kinderbesteck/content', function(req, res) { res.render('kinderbesteck', {title: "Kinderbesteck"}); });

app.listen(port);