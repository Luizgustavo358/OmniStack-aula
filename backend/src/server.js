const express = require('express');
const routes = require('./routes');

const app = express();

// express usando o json
app.use(express.json());

// chamando as rotas
app.use(routes);

// porta
app.listen(3333);