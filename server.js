const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get_messages', (req, res) => {
  console.log(req.body);
  console.log(req.body.tag);
  res.send({ express: req.body });
});

app.post('/api/submit_message', (req, res) => {
  console.log(req.body);
  res.send(
    `POST request. req.body.post: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));