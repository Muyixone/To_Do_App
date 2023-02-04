const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3333;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
