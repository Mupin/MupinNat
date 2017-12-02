var express = require('express');

var app = express();

app.set('view engine','pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('index', { title: 'Mupiñ' });
})

app.get('/signup', function (req, res) {
	res.render('index', { title: 'Mupiñ - Signup' });
})

app.get('/signin', function (req, res) {
	res.render('index', { title: 'Mupiñ - Signin' });
})

app.listen(5000, function (err) {
	if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('Escuchando en el puerto 5000')
})