import { Event } from './event';

const EVENTS = [
  {
    id: 'e1',
    title: 'Web Dev Networking Night',
    date: '2024-11-25',
    location: 'Innovation Lounge, New York, NY',
  },
  {
    id: 'e2',
    title: 'Web Dev Networking Night',
    date: '2024-11-25',
    location: 'Innovation Lounge, New York, NY',
  },
  {
    id: 'e3',
    title: 'Web Dev Networking Night',
    date: '2024-11-25',
    location: 'Innovation Lounge, New York, NY',
  },
  {
    id: 'e4',
    title: 'Web Dev Networking Night',
    date: '2024-11-25',
    location: 'Innovation Lounge, New York, NY',
  },
];

export const EventsList = () => {
  const RenderEvents = EVENTS.map((event) => (
    <Event
      key={event.id}
      title={event.title}
      date={event.date}
      location={event.location}
    />
  ));

  return (
    <div className="grid gap-3 grid-cols-fill-320 justify-center">
      {RenderEvents}
    </div>
  );
};
