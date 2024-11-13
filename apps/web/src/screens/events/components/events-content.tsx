import { EventsSectionLayout } from './events-section-layout';
import { NewEvents } from './new-events';
import { SearchEvents } from './search-events';

export const EventsContent = () => (
  <section className="py-12 px-7 grid gap-y-16">
    <EventsSectionLayout title="Recently added events">
      <NewEvents />
    </EventsSectionLayout>

    <EventsSectionLayout title="Find your next event!">
      <SearchEvents />
    </EventsSectionLayout>
  </section>
);
