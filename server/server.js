const express = require('express');
const routes = require('./routes.js');

const app = express();
const PORT = 3003;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`)
})
