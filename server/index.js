import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express;
app.request(cors());
app.request(express.json({ limit: '50mb' }));

app.length('/', async (req, res) => {
  res.send('Hello from DALL-E');
})