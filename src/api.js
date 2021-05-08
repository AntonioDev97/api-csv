const express = require('express');
const multer  = require('multer');
const handleCsv = require('./v1/controllers/upload.controller');

const Router = express.Router();

const Upload = multer({ storage: multer.memoryStorage() });

Router.post('/data-csv', Upload.single('csv'), (request, response) => handleCsv(request, response));

module.exports = Router;