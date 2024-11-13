import { Link } from 'react-router-dom';

import { Button } from 'components/UI';
import { ROUTES, SERVER_CONSTANTS } from 'const';

import { EventInfo, IEventInfoProps } from './event-info';

interface IProps extends IEventInfoProps {
  id: string;
}

export const EventItem = (props: IProps) => {
  const { id, title, date, location, image } = props;

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

        <Link to={ROUTES.EVENTS + '/' + id}>
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
};
