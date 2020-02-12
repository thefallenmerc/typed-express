import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

/**
 * Initialize Cron
 */
import cron from './cron';

/**
 * Initialize Routes
 */
import routes from './routes';

/**
 * Create express App
 */
const app = express();

/**
 * Run Crons
 */
cron();

/**
 * Initialize DotENV
 */
dotenv.config();


/**
 * Use logger
 */
app.use(logger('dev'));

/**
 * Initialize body parser
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Initialize cookie parser
 */
app.use(cookieParser());

/**
 * Initialize static dir
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Use routes
 */
app.use('/', routes);

/**
 * Export the app
 */
export default app;
