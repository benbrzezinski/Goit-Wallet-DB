const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');
require('./config/passport');
const usersRouter = require('./routes/users.js');
const transactionsRouter = require('./routes/transactions.js');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/wallet/api/users', usersRouter);
app.use('/wallet/api/transactions', transactionsRouter);

app.use((err, _, res, __) => {
  res.status(404).json({
    status: 404,
    statusText: 'Not Found',
    data: {
      message: err.message,
    },
  });
});

app.use((err, _, res, __) => {
  res.status(500).json({
    status: 500,
    statusText: 'Internal Server Error',
    data: {
      message: err.message,
    },
  });
});

module.exports = app;
