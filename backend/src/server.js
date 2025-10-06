import express from 'express';
import { ENV } from './config/env.js';
import connectDB from './config/db.js';

const app = express();



app.get('/', (req, res) => {
  res.send('Server is running!');
});

connectDB().then(() => {
  app.listen(ENV.PORT, () => {
    console.log(`Server Started on port ${ENV.PORT}`);
  });
});