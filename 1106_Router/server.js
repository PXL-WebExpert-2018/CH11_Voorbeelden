// Express en externe routes laden
const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/', routes);
app.listen(3000, function () {
	console.log('Express-server gestart op http://localhost:3000');
});2