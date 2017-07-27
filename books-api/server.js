require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('config');
const books = require('books');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(cors());

app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Book Lender API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /books
    GET /books/:id
    PUT /books/:id { shelf }
    POST /search { query, maxResults }
  </pre>
  `;

  res.send(help);
});
