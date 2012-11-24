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
//     //$(".CategoryList")("<b>test jea!</b>");
// });

function render(categorie_name, res) {
	fs.readFile("./views/content/"+categorie_name+".html", 'utf8', function(err, data) {
		if (err) throw err;
		jsdom.env({
		  html: "http://www.wunschgravur.de/"+categorie_name,
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

function render_content_only(categorie_name, res) {
	fs.readFile("./views/content/"+categorie_name+".html", 'utf8', function(err, data) {
		res.send(data);
	})
}

function render_content_info_only(categorie_name, res) {
	fs.readFile("./views/info/"+categorie_name+".html", 'utf8', function(err, data) {
		res.send(data);
	})
}


//app.set('view engine', 'jshtml');

app.get('/', function(req, res) { render("index", res) });
app.get('/startseite', function(req, res) { render("startseite", res); });
app.get('/messer', function(req, res) { render("messer", res); });
app.get('/musik', function(req, res) { render("musik", res); });
app.get('/schloesser', function(req, res) { render("schloesser", res); });
app.get('/stifte', function(req, res) { render("stifte", res); });
app.get('/taschenlampen', function(req, res) { render("taschenlampen", res); });
app.get('/tiere', function(req, res) { render("tiere", res); });
app.get('/unterwegs', function(req, res) { render("unterwegs", res); });
app.get('/visitenkarten', function(req, res) { render("visitenkarten", res); });
app.get('/zippos', function(req, res) { render("zippos", res); });
app.get('/holz', function(req, res) { render("holz", res); });
app.get('/zuhause', function(req, res) { render("zuhause", res); });
app.get('/fahrzeuge', function(req, res) { render("fahrzeuge", res); });
app.get('/kinderbesteck', function(req, res) { render("kinderbesteck", res); });
app.get('/aktionsprodukte', function(req, res) { render("aktionsprodukte", res); });

/* Content Only */
app.get('/content', function(req, res) { render_content_only("index", res); });
app.get('/startseite/content', function(req, res) { render_content_only("startseite", res); });
app.get('/messer/content', function(req, res) { render_content_only("messer", res); });
app.get('/musik/content', function(req, res) { render_content_only("musik", res); });
app.get('/schloesser/content', function(req, res) { render_content_only("schloesser", res); });
app.get('/stifte/content', function(req, res) { render_content_only("stifte", res); });
app.get('/taschenlampen/content', function(req, res) { render_content_only("taschenlampen", res); });
app.get('/tiere/content', function(req, res) { render_content_only("tiere", res); });
app.get('/unterwegs/content', function(req, res) { render_content_only("unterwegs", res); });
app.get('/visitenkarten/content', function(req, res) { render_content_only("visitenkarten", res); });
app.get('/zippos/content', function(req, res) { render_content_only("zippos", res); });
app.get('/holz/content', function(req, res) { render_content_only("holz", res); });
app.get('/zuhause/content', function(req, res) { render_content_only("zuhause", res); });
app.get('/fahrzeuge/content', function(req, res) { render_content_only("fahrzeuge", res); });
app.get('/kinderbesteck/content', function(req, res) { render_content_only("kinderbesteck", res); });

/* Content Text Only */
app.get('/info', function(req, res) { render_content_info_only("index", res); });
app.get('/startseite/info', function(req, res) { render_content_info_only("startseite", res); });
app.get('/messer/info', function(req, res) { render_content_info_only("messer", res); });
app.get('/musik/info', function(req, res) { render_content_info_only("musik", res); });
app.get('/schloesser/info', function(req, res) { render_content_info_only("schloesser", res); });
app.get('/stifte/info', function(req, res) { render_content_info_only("stifte", res); });
app.get('/taschenlampen/info', function(req, res) { render_content_info_only("taschenlampen", res); });
app.get('/tiere/info', function(req, res) { render_content_info_only("tiere", res); });
app.get('/unterwegs/info', function(req, res) { render_content_info_only("unterwegs", res); });
app.get('/visitenkarten/info', function(req, res) { render_content_info_only("visitenkarten", res); });
app.get('/zippos/info', function(req, res) { render_content_info_only("zippos", res); });
app.get('/holz/info', function(req, res) { render_content_info_only("holz", res); });
app.get('/zuhause/info', function(req, res) { render_content_info_only("zuhause", res); });
app.get('/fahrzeuge/info', function(req, res) { render_content_info_only("fahrzeuge", res); });
app.get('/kinderbesteck/info', function(req, res) { render_content_info_only("kinderbesteck", res); });

app.listen(port);