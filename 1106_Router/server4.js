// 1. Modules laden en gegevens ophalen
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router');

const app = express();

app.use(express.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(3000, function () {
	console.log('Express app gestart op localhost:3000');
});
