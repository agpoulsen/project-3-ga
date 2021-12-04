const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const AppError = require('./util/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');

const app = express();

// MIDDLEWARE STACK:
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// DATABASE CONNECTION:
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect( DB,
  { useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  }).then(() => console.log('Connection to Atlas successful'));

// ROUTES:
app.use('/api/v1/users', userRouter);

// ROUTER HANDLER: Catches any routes that were missed.
app.all('*', (req, res, next) => {
  next( new AppError(`Can't find ${ req.originalUrl } on this server!`, 404));
});

// ERROR HANDLER
app.use(globalErrorHandler);

module.exports = app;
