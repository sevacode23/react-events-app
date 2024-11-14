import { Link } from 'react-router-dom';

import { AppHeading } from 'components';
import { ROUTES } from 'const';

export const EventHeader = () => (
  <div className="p-header pt-10 grid grid-flow-col justify-between">
    <AppHeading />

    <Link className="text-pastelBlue" to={ROUTES.EVENTS}>
      View all events
    </Link>
  </div>
);
