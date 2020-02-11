import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
import WebRouter from './routes/web';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', WebRouter);
// app.use('/users', usersRouter);

export default app;