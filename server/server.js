//server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
const app = express();

import issuesRoutes from './routes/issues.js';
import usersRoutes from './routes/users.js';

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/', issuesRoutes);
app.use('/auth', usersRoutes);

const URL = process.env.CONN;
const PORT = process.env.PORT || 5000;

mongoose.connect(URL)
  .then(() => app.listen(PORT, () => console.log(`server listening on ${PORT}`)))
  .catch((err) => console.log(err.message))



