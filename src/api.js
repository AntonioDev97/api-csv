const express = require('express');
const handleCsv = require('./v1/controllers/upload.controller');

const Router = express.Router();

Router.post('/data-csv', (request, response) => handleCsv(request, response));

module.exports = Router;