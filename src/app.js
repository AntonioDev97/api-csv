const express = require('express');
const helment = require('helmet');
const cors = require('cors');
const Router = require('./api');

const Server = express();
const CorsConfig = {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE", "PATCH"],
    allowHeaders: [
        "Access-Control-Allow-Methods",
        "Access-control-Allow-Origin",
        "Origin",
        "Apikey",
        "Authorization",
        "Content-Type, Accept",
    ]
}

Server.use(express.json());
Server.use(express.urlencoded({ extended: false }));
Server.use(cors(CorsConfig));
Server.use(helment());
Server.use('/v1', Router);

module.exports = Server;
