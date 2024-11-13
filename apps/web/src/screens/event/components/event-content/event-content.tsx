import { EventControls } from '../event-controls';
import { EventInfo } from '../event-info';

export const EventContent = () => {
  return (
    <div className="grid justify-center gap-y-12 font-bold text-pastelBlue">
      <div className="grid grid-flow-col justify-between">
        <h2>EVENT TITLE</h2>
        <EventControls />
      </div>

      <EventInfo />
    </div>
  );
};
