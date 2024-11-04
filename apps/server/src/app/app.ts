import express, { Request, Response } from 'express';
import cors from 'cors';

import { EVENTS } from '../data/events';
import { generateRandomNumber, sleep } from '../utils';

export const app = express();

app.use(express.static('./public'));
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

const PORT = 5000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Bye, word!');
});

app.get('/events', async (_req, res) => {
  res.send(EVENTS);
});

app.get('/random-number', async (_req: Request, res: Response) => {
  await sleep(1000);

  res.status(200).send(generateRandomNumber(-1000, 1000).toString());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
