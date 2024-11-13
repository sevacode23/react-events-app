import { AppHeading } from 'components';
import { ROUTES } from 'const';
import { Link } from 'react-router-dom';

export const EventHeader = () => {
  return (
    <div className="p-header pt-10 grid grid-flow-col justify-between">
      <AppHeading />

      <Link className="text-pastelBlue" to={ROUTES.EVENTS}>
        View all events
      </Link>
    </div>
  );
};
