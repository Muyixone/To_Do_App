const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const taskRoute = require('./routes/index');

const app = express();
const PORT = 3333;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set View Engine
app.set('view engine', 'ejs');

let todos = [];

app.use('/todo', taskRoute);

// Index Page
app.get('/', (req, res) => {
  return res.status(200).render('index', {
    todos: todos,
  });
});

// ERROR HANDLER
app.use('*', (req, res, next) => {
  return res.status(404).render('notFound');
});

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});

module.exports = app;
