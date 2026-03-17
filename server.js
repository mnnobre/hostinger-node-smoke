const express = require('express');

const app = express();
const port = Number(process.env.PORT || 3000);

app.get('/', (_req, res) => {
  res.status(200).send('ok');
});

app.get('/healthz', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`smoke app running on ${port}`);
});
