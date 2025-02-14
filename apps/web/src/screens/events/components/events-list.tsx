import { IEvent } from '@events/shared';

import { EventItem } from './event-item';

interface IProps {
  events: IEvent[];
}

export const EventsList = (props: IProps) => {
  const { events } = props;

  const RenderEvents = events.map((event) => (
    <EventItem
      key={event.id}
      id={event.id}
      title={event.title}
      date={event.date}
      location={event.location}
      image={event.image}
    />
  ));

  return (
    <div className="grid gap-3 grid-cols-fit-320 justify-center">
      {RenderEvents}
    </div>
  );
};
