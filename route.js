// Inject modules
const express = require('express');
const path = require('path');
const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')));


/**
 * ---------------------------------------------------------------
 * Inject all routes like below
 * ---------------------------------------------------------------
 */

const employeeRoute = require('./api/employee-api');


/* -----------------------------------------------------------  */

// setup all route paths like below

app.use('/employee', employeeRoute);

module.exports = app;
