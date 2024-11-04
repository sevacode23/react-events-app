import { Event } from '../event';

import { useEventsList } from './evens-list.state';

export const EventsList = () => {
  const { isPending, data, isError } = useEventsList();

  let Content: React.ReactNode;

  if (isPending) {
    Content = <p className="text-center text-white text-2xl">Loading...</p>;
  }

  if (isError) {
    <p className="text-center text-white text-2xl">Error ocurred</p>;
  }

  if (data) {
    Content = data.map((event) => (
      <Event
        key={event.id}
        title={event.title}
        date={event.date}
        location={event.location}
        image={event.image}
      />
    ));
  }

  return (
    <div className="grid gap-3 grid-cols-fit-320 justify-center">{Content}</div>
  );
};
