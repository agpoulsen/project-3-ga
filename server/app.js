const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${ port }...`);
});

// HTTP Methods:

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server', app: "Test.js"})
});

app.post('/', (req, res) => {
  res.send('You can post to the endpoint')
})
