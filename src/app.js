'use strict'

const connectionProvider = require("./providers/connectionProvider");
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();

connectionProvider.connect();

const indexRoute = require('/Projetos/DoNate/src/routes/index.route');
const foundationRoute = require('/Projetos/DoNate/src/routes/foundation.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoute);
app.use('/foundation', foundationRoute);

module.exports = app;