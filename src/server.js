const { PORT } = require('./config');

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./routes');

const app = express();

app.use(
  cors(),
  helmet(),
  router,
);

app.listen(
  PORT,
  () => console.log('[LOG] server is running on http://localhost:%s', PORT)
);
