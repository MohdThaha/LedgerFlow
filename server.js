require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
// const accountRouter = require("./router/accountRouter")
// const accountAC = require("./router/accountAC")

require('./database/connection/connection') 
// require("./database/connection/redisClient");

server.use(express.json({ limit: '10mb' })); 
server.use(express.urlencoded({ limit: '10mb', extended: true }));

server.use(cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization"
}));

server.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.sendStatus(200);
});

server.use(helmet()); 

// Disable ETag + disable caching
server.set("etag", false);
server.use((req, res, next) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    next();
});

// server.use(accountRouter,accountAC);

const PORT = process.env.PORT || 4001;

server.get('/', (req, res) => {
    res.status(200).json(`${process.env.REGION} ${process.env.ENVIRONMENT} ${process.env.PROJECT_NAME} SERVER STARTED - ${process.env.MODULE_NAME} v${process.env.VERSION}`);
});

server.listen(PORT, () => {
    console.log(`${process.env.REGION} ${process.env.ENVIRONMENT} ${process.env.PROJECT_NAME} SERVER ${process.env.MODULE_NAME} v${process.env.VERSION} STARTED AT PORT : ${PORT}`);
});

