import { EventsLoader } from '../events-loader';

import { useNewEvents } from './new-events.state';

export const NewEvents = () => {
  const { isPending, data, isError } = useNewEvents();

  return <EventsLoader isPending={isPending} events={data} isError={isError} />;
};
