import { IEvent } from '@events/shared';

import { ErrorBlock } from 'components/UI';

import { EventContext } from '../../context';

import { EventControls } from '../event-controls';
import { EventInfo } from '../event-info';

import { useEventContent } from './event-content.state';

const LoadedEvent = (props: IEvent) => (
  <EventContext.Provider value={{ fetchedEvent: { ...props } }}>
    <div className="w-[40rem] grid gap-y-12 font-bold text-pastelBlue">
      <div className="grid grid-flow-col justify-between">
        <h2 className="text-2xl text-azureWhite">{props.title}</h2>

        <EventControls />
      </div>

      <EventInfo />
    </div>
  </EventContext.Provider>
);

export const EventContent = () => {
  const { data, error, isPending } = useEventContent();

  let Element = null;

  if (error) {
    Element = <ErrorBlock title="Failed loading the event" error={error} />;
  } else if (isPending) {
    Element = <p className="text-2xl text-azureWhite">Loading...</p>;
  } else if (data) {
    Element = <LoadedEvent {...data} />;
  }

  return <div className="px-5 grid justify-center">{Element}</div>;
};
