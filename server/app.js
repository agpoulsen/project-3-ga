const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// HTTP Methods:

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server', app: "Test.js"})
// });
//
// app.post('/', (req, res) => {
//   res.send('You can post to the endpoint')
// });

app.listen(port, () => {
  console.log(`App running on port ${ port }...`);
});
