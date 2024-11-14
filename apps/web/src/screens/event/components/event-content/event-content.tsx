import { ErrorBlock } from 'components/UI';

import { EventControls } from '../event-controls';
import { EventInfo } from '../event-info';

import { useEventContent } from './event-content.state';

export const EventContent = () => {
  const { data, error, isPending } = useEventContent();

  let Element = null;

  if (error) {
    Element = <ErrorBlock title="Failed loading the event" error={error} />;
  } else if (isPending) {
    Element = <p className="text-2xl text-azureWhite">Loading...</p>;
  } else if (data) {
    Element = (
      <div className="w-[40rem] grid gap-y-12 font-bold text-pastelBlue">
        <div className="grid grid-flow-col justify-between">
          <h2 className="text-2xl text-azureWhite">{data.title}</h2>

          <EventControls {...data} />
        </div>

        <EventInfo {...data} />
      </div>
    );
  }

  return <div className="px-5 grid justify-center">{Element}</div>;
};
