import express, { Request, Response } from 'express';
import cors from 'cors';
import { IEvent, TCreateEvent } from '@events/shared';

import {
  createEvent,
  deleteEvent,
  readEvents,
  updateEvent,
  validateEventData,
} from '../utils';
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

app.get('/events/:id', async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400).send({ error: { message: 'Event id is required' } });
    return;
  }

  const events = await readEvents();

  const event = events.find((event) => event.id === id);

  if (!event) {
    res.status(404).send({ error: { message: 'Event not found' } });
    return;
  }

  res.status(200).send(event);
});

app.delete('/events/:id', async (req, res) => {
  const id = req.params.id;

  const event = await deleteEvent(id);

  if (!event) {
    res.status(404).send({ error: { message: 'Event not found' } });
    return;
  }

  res.status(200).send(event);
});

app.put(
  '/events/:id',
  async (req: Request<{ id: string }, unknown, TCreateEvent>, res) => {
    const id = req.params.id;

    if (!validateEventData(req.body)) {
      res.status(400).send({ error: { message: 'Invalid data provided' } });
      return;
    }

    const { title, description, image, date, time, location } = req.body;

    const event = await updateEvent(id, {
      title,
      description,
      image,
      date,
      time,
      location,
    });

    if (!event) {
      res.status(404).send({ error: { message: 'Event not found' } });
      return;
    }

    res.status(200).send(event);
  }
);

app.get('/event-images', (_req, res) => {
  res.send(EVENT_IMAGES);
});

app.post(
  '/events',
  async (req: Request<unknown, unknown, TCreateEvent>, res) => {
    const { body } = req;

    if (!body) {
      res.status(400).send({ error: { message: 'Body is required' } });
    }

    if (!validateEventData(body)) {
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
