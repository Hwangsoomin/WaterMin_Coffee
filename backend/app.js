import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import logger from 'morgan';
import indexRouter from './routes/index.js';

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

app.use('/api', indexRouter);

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

export default app;
