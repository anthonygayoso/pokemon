// requires
var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

// inicializar variables
var app = express();

// configurar nuevos cors
app.use( cors({ origin: true, credentials: true }) );


// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



/* ---- rutas del api ---- */
app.use('/api/pokemon', require('./routes/pokemon') );

// escuchar peticiones
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Express server puerto ${port}: \x1b[32m%s\x1b[0m`, `online`);
});