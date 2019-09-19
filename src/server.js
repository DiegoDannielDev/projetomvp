var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json())

//  Add patient to queue
app.post('/addQueue', (req, res) => {
  let patient = false;

  (patient == true)
    ?
    res.json({
      "exist": true,
      "patient": {
        "cpf": req.body.cpf,
        "name": null,
        "priority": null
      }
    })
    :
    res.json({
      "exist": false
    });
});

// Create patient and add to queue
app.post('/upQueue', (req, res) => {
  res.json({
    "patient": {
      "cpf": req.body.cpf,
      "name": req.body.name,
      "priority": req.body.priority
    }
  });
});

// Remove patient from queue
app.delete('/removeFromQueue', (req, res) => {
  res.send(`${req.body.cpf} retirado da lista`);
});

app.listen(4000, () => {
  console.log('Application running on port http://localhost:4000');
});