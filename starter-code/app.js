const app = require('express')();
const globals = require('./config/globals');
const mongoose = require('mongoose');

//conexion
mongoose.connect(globals.dbUrl);
//config express
require('./config/express')(app);
//Requerir Rutas
const main = require('./routes/main.js');

// default value for title local
app.locals.title = 'Express -DE-Lab-mongoose-movies';

//Usar Rutas
app.use('/', main);

//gestion errores
require('./config/error-handler')(app);

module.exports = app;
