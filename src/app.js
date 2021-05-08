const express = require('express');
const helment = require('helmet');
const cors = require('cors');

const server = express();
const corsConfig = {
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

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors(corsConfig));
server.use(helment());

module.exports = server;
