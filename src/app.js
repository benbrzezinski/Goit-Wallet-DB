import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import './config/passport.js';
import usersRouter from './routes/users.js';
import transactionsRouter from './routes/transactions.js';

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/transactions', transactionsRouter);

app.use((err, _, res, __) => {
  res.status(404).json({
    status: 404,
    statusText: 'Not Found',
    result: {
      message: err.message,
    },
  });
});

app.use((err, _, res, __) => {
  res.status(500).json({
    status: 500,
    statusText: 'Internal Server Error',
    result: {
      message: err.message,
    },
  });
});

export default app;
