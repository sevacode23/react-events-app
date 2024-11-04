import { memo } from 'react';
import { IEvent } from '@events/shared';

import { EventsList } from './events-list';

interface IProps {
  isPending: boolean;
  isError: boolean;
  events?: IEvent[];
}

export const EventsLoader = memo(function EventsLoader(props: IProps) {
  const { isPending, events, isError } = props;

  let Content: React.ReactNode;

  if (isPending) {
    Content = <p className="text-center text-white text-2xl">Loading...</p>;
  }

  if (isError) {
    <p className="text-center text-white text-2xl">Error ocurred</p>;
  }

  if (events) {
    Content = <EventsList events={events} />;
  }

  return <>{Content}</>;
});
