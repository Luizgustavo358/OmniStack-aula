const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(upload);

// req.query => acessar query params (para filtros)
// req.params => acessar route params (para edicao, delete)
// req.body => acessar corpo da requisicao (para criacao, edicao)


routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = routes;