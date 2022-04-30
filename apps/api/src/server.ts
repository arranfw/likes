import express from 'express';
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

let ctr = 0;

app.get('/likes', (_, res) => {
  res.json(ctr);
});

app.post('/likes', async (req, res) => {
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

  await new Promise((resolve) => setTimeout(() => resolve(''), 1000));

  res.json(ctr);
});

app.listen(4000);
