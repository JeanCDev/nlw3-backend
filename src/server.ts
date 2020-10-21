import path from 'path';

import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

var corsOptions = {
  origin: 'https://nlw-3-happy.netlify.app',
  optionsSuccessStatus: 200
}

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(cors(corsOptions));

app.use(errorHandler);

app.listen(process.env.PORT || 3333);
