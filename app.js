const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const taskRoute = require('./routes/index');
const dayjs = require('dayjs');

const app = express();
const PORT = 3333;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set View Engine
app.set('view engine', 'ejs');

const todos = [];

app.get('/', (req, res) => {
  res.status(200).render('index', {
    todos: todos,
  });
});

app.use('/todo', taskRoute);

// ERROR HANDLER
app.use('*', (req, res, next) => {
  res.status(404).render('notFound');
});

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
