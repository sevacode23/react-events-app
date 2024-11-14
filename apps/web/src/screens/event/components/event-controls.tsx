import { IEvent } from '@events/shared';

import { EventDelete } from './event-delete';
import { EventEdit } from './event-edit';

export const EventControls = (props: IEvent) => (
  <div className="grid grid-flow-col gap-x-6">
    <EventDelete />

    <EventEdit {...props} />
  </div>
);
