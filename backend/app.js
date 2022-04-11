import express from 'express';
import mysql from 'mysql';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import logger from 'morgan';

let app = express();
dotenv.config();

const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

// errorHandler
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
  console.error(err.message);
  console.error(err.stack);
  return res.status(err.statusCode || 500).json({
    statusCode: err.statusCode,
    status: 'Error',
    message: err.message,
  });
});

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  insecureAuth: true,
});

connection.connect();

connection.end();

export default app;
