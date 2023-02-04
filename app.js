const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const taskRoute = require('./routes/index');

const app = express();
const PORT = 3333;

const todos = [];
// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set View Engine
app.set('view engine', 'ejs');

app.use('/', taskRoute);

app.get('/', (req, res) => {
  res.status(200).render('index', {
    todos: todos,
  });
});

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
