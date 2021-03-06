const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

dotenv.config();

// specify your middleware here

// specify your routes here

console.log('Connecting to database. Put the kettle on while you wait... đĢ')

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Database connected! đâ'))
    .catch((error) => console.log(error, 'Database did not connect! âšī¸â'));

app.listen(3001, () => console.log('The server is listening... đ'));
