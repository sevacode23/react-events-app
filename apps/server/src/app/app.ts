import express, { Request, Response } from 'express';
import cors from 'cors';
import { IEvent } from '@events/shared';

import { EVENTS } from '../data/events';
import { generateRandomNumber, sleep } from '../utils';

interface IEventsParams {
  search?: string;
}

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

app.get(
  '/events',
  async (req: Request<unknown, IEvent[], unknown, IEventsParams>, res) => {
    const search = req.query.search;

    let events = [...EVENTS];

    if (search) {
      events = events.filter((event) => {
        const searchText = `${event.title} ${event.description} ${event.location}`;

        return searchText.toLowerCase().includes(search.toLowerCase());
      });
    }

    res.send(events);
  }
);

app.get('/random-number', async (_req: Request, res: Response) => {
  await sleep(1000);

  res.status(200).send(generateRandomNumber(-1000, 1000).toString());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
