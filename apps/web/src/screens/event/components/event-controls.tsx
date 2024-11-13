import { EventDelete } from './event-delete';
import { EventEdit } from './event-edit';

export const EventControls = () => (
  <div className="grid grid-flow-col gap-x-4">
    <EventDelete />
    <EventEdit />
  </div>
);
