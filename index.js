'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes');
const respuestaRoutes = require('./routes/respuestaRoutes');
const notaRoutes = require('./routes/notaRoutes');
const notaTallerRoutes = require('./routes/notaTallerRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', usuarioRoutes.routes);

app.use('/api', respuestaRoutes.routes);

app.use('/api', notaRoutes.routes)

app.use('/api', notaTallerRoutes.routes)




app.listen(config.port, () => {
  console.log('app listening on url http://192.168.0.16:' + config.port + '/api/' )
});