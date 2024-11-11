import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'path';
import { IEvent, TCreateEvent } from '@events/shared';

const EVENT_ID_REGEXP = /^e(\d+)$/;
const EVENT_ID_START = 'e';

const getFilePath = () => resolve(__dirname, '../..', 'data', 'events.json');

export const readEvents = async () => {
  const buffer = await readFile(getFilePath());

  const events: IEvent[] = JSON.parse(buffer.toString());

  return events;
};

const writeEvents = (events: IEvent[]) => {
  const data = JSON.stringify(events);
  return writeFile(getFilePath(), data);
};

const getLastEventId = (events: IEvent[]) => {
  if (!events.length) {
    return null;
  }

  return events[events.length - 1].id;
};

const extractEventIdNumber = (id: string) => {
  const match = id.match(EVENT_ID_REGEXP);

  return match ? parseInt(match[1], 10) : null;
};

const extractLastEventId = (events: IEvent[]) => {
  const lastId = getLastEventId(events);

  if (!lastId) {
    return null;
  }

  return extractEventIdNumber(lastId);
};

const assignEventId = (lastIdNumber: number | null) => {
  if (!lastIdNumber) {
    return EVENT_ID_START + '1';
  }

  return EVENT_ID_START + (lastIdNumber + 1);
};

const getCreateEventId = (events: IEvent[]) => {
  const lastNumber = extractLastEventId(events);
  const eventId = assignEventId(lastNumber);

  return eventId;
};

export const createEvent = async (createEvent: TCreateEvent) => {
  const events = await readEvents();

  const id = getCreateEventId(events);

  const { title, description, image, location, date, time } = createEvent;

  const newEvent: IEvent = {
    id,
    title,
    description,
    image,
    location,
    date,
    time,
  };

  const newEvents = [...events, newEvent];

  await writeEvents(newEvents);

  return newEvent;
};
