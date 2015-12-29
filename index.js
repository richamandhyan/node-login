var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var request = require('request');


	app.use(bodyParser.urlencoded({extended: false}));

	app.use(function(req,res,next){
		next();
	});

	app.get('/', function (req, res) {
			res.sendFile(__dirname + '/public/login.html');
	});

	app.post('/login',function (req, res){
		console.log(req.body.first);
	var fname = req.body.fname;
	var lname = req.body.lname;
	var phone = req.body.phone;
	var mail = req.body.mail;
	//console.log("First name = " +fname + "Last Name :"+lname +"Phone :"+phone + "email:" +mail);
	res.end("yes");
	});


// app.post('/endpoint', function(req, res){
// 	var obj = {};
// 	console.log('body: ' + req.body.fname);
// 	res.send(req.body.fname);
// });

// request.post('file:///Users/rbalwani/node-ajaxa/public/login.html',{ form: { key: 'value' } },
//     function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body);
//         }
//     }
// );


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Authenticating user http://%s:%s', host, port);

}); 