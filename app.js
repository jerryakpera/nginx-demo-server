const path = require('path');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
