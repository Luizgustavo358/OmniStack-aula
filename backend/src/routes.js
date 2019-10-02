const express = require('express');

const routes = express();

// req.query => acessar query params (para filtros)
// req.params => acessar route params (para edicao, delete)
// req.body => acessar corpo da requisicao (para criacao, edicao)


routes.post('/users', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;