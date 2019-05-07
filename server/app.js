const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');


// const http = require('http');

//setup
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//models
const models = require("./models");
//Sync database
models.sequelize.sync().then( () => {
    console.log("Database Compleated");
}).catch( (err) => {
    console.log(err);
});

require('./routes')(app);


// const port = parseInt(process.env.PORT, 10) || 8000;
// app.set('port',port);
// const server = http.createServer(app);
// server.listen(port);


module.exports = app;