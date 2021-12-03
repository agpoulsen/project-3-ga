const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

dotenv.config({ path: './config.env'});

const app = express();

// Middleware
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware stack");
  next();
});

const port = process.env.PORT || 3000;

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
//
// app.post('/', (req, res) => {
//   res.send('You can post to the endpoint')
// });

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
};

app
  .route('/api/v1/users')
  .get(getAllUsers)
  .post(createUser);

app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${ port }...`);
});
