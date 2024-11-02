import { EventsList } from './evens-list';

export const EventsContent = () => (
  <section className="py-12 grid gap-y-12">
    <h2 className="text-center text-pastelBlue text-3xl font-bold">
      Recently added events
    </h2>

    <EventsList />
  </section>
);
