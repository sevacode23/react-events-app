import { IEvent } from '../models';

export type TCreateEvent = Pick<
  IEvent,
  'title' | 'description' | 'image' | 'date' | 'location' | 'time'
>;
