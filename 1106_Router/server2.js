// Express en externe routes laden
const express = require('express');
const routes = require('./routes');
const app = express();

// De router is nu abstract gemaakt en werkt alleen voor de route \team in de
// request. Elke andere route is nu ongeldig (of kan via een andere router worden afgehandeld).
app.use('/team', routes);
app.listen(3000, function () {
	console.log('Express-server gestart op http://localhost:3000');
});