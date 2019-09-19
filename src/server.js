var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('MVP - Controle de senha nas unidades');
});

app.listen(4000, () => {
  console.log('Application running on port http://localhost:4000');
});