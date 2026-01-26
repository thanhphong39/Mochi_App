import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { connectDB } from './libs/db';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server bắt đầu trên cổng ${PORT}`);
  });
});

