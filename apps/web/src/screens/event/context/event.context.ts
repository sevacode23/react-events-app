import { createContext, useContext } from 'react';

import { IEvent } from '@events/shared';

export interface IEventContext {
  fetchedEvent?: IEvent;
}

export const EventContext = createContext<IEventContext>({});

export const useEventContext = () => useContext(EventContext);
