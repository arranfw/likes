import express from 'express';
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let ctr = 0;

app.get('/likes', (_, res) => {
  res.json(ctr);
});

app.post('/likes', (req, res) => {
  const { action } = req.body;

  switch (action) {
    case 'like':
      ctr += 1;
      break;
    case 'unlike':
      ctr -= 1;
      break;
    default:
      throw new Error('Invalid action');
  }

  res.json(ctr);
});

app.listen(4000);
