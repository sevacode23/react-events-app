import express, { Request, Response } from 'express';
import cors from 'cors';
import { IEvent, TCreateEvent } from '@events/shared';

import { createEvent, readEvents } from '../utils';
import { EVENT_IMAGES } from '../constant';

interface IEventsParams {
  search?: string;
}

export const app = express();

app.use(express.json());
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

    let events = [...(await readEvents())];

    if (search) {
      events = events.filter((event) => {
        const searchText = `${event.title} ${event.description} ${event.location}`;

        return searchText.toLowerCase().includes(search.toLowerCase());
      });
    }

    res.send(events);
  }
);

app.get('/events/images', (_req, res) => {
  res.send(EVENT_IMAGES);
});

app.post(
  '/events',
  async (req: Request<unknown, unknown, TCreateEvent>, res) => {
    const { body } = req;

    if (!body) {
      res.status(400).send({ error: { message: 'Body is required' } });
    }

    if (
      !body.title?.trim() ||
      !body.description?.trim() ||
      !body.location?.trim() ||
      !body.image?.trim() ||
      !body.time?.trim() ||
      !body.date?.trim()
    ) {
      res.status(400).send({ error: { message: 'Invalid data provided' } });
      return;
    }

    const newEvent = await createEvent(body);

    res.status(201).send(newEvent);
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
