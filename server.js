'use strict';
require('console-stamp')(console, 'HH:MM:ss.l');

const express = require('express');
const util = require("util");

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  console.log('Get request: ' + req.headers.host + ' ' + req.method + ' ' + req.url )
  res.send('Hello Dima\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
