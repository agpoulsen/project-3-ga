const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config({ path: './config.env'});

const app = express();
const port = process.env.PORT || 3000;

// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(`mongodb+srv://user1:${ process.env.DATABASE_PASSWORD }@cluster0.nwx7z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  }).then(con => {
    console.log(con.connections);
    console.log('DB Connection successful');
  })

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
