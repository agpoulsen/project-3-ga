const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');

dotenv.config({ path: './config.env'});

const app = express();

// MIDDLEWARE STACK: 
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware stack");
  next();
});

// DATABASE CONNECTION:
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect( DB,
  { useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  }).then(() => console.log('Connection to Atlas successful'));

// HTTP Methods:

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server', app: "Test.js"})
});


// ROUTES:
app.use('/api/v1/users', userRouter);

// START SERVER:
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${ port }...`);
});
