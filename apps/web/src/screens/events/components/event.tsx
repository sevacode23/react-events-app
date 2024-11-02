import { Button } from 'components/UI';

import { EventInfo, IEventInfoProps } from './event-info';

export const Event = (props: IEventInfoProps) => {
  const { title, date, location } = props;

  return (
    <div className="rounded-md bg-arsenic shadow-cardDark overflow-hidden">
      <img />

      <div className="p-4 grid justify-items-center gap-y-12">
        <EventInfo title={title} date={date} location={location} />

        <Button>View Details</Button>
      </div>
    </div>
  );
};
