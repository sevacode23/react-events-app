import { Button } from 'components/UI';
import { SERVER_CONSTANTS } from 'const';

import { EventInfo, IEventInfoProps } from './event-info';

export const Event = (props: IEventInfoProps) => {
  const { title, date, location, image } = props;

  return (
    <div className="rounded-md bg-arsenic shadow-cardDark overflow-hidden">
      <img src={SERVER_CONSTANTS.IMAGES_URL + image} />

      <div className="p-4 grid justify-items-center gap-y-12">
        <EventInfo
          title={title}
          date={date}
          location={location}
          image={image}
        />

        <Button>View Details</Button>
      </div>
    </div>
  );
};
