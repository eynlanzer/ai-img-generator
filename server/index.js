import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
const port = process.env.PORT || 3001

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E');
})

const startServer = async () => {
  app.listen(port, () => {
    const date = new Date()
    console.log(`${date} - Server is running on port: ${port}`)
  })
}

startServer()