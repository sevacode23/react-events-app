import { getImageUrl } from 'utils';

import { useEventContext } from '../context';

export const EventInfo = () => {
  const { fetchedEvent } = useEventContext();

  if (!fetchedEvent) {
    return null;
  }

  const imageUrl = getImageUrl(fetchedEvent.image);

  return (
    <div className="rounded-lg overflow-hidden bg-onyx grid gap-y-8">
      <img className="w-full h-[20rem]" src={imageUrl} />

      <div className="p-12 pt-0 grid gap-y-5">
        <div className="grid">
          <b className="text-lg">{fetchedEvent.location}</b>
          <time
            className="text-2xl font-normal text-azureWhite"
            dateTime={`${fetchedEvent.date}T${fetchedEvent.time}Z`}
          >
            {fetchedEvent.date}@{fetchedEvent.time}
          </time>
        </div>

        <p className="text-xl font-normal">{fetchedEvent.description}</p>
      </div>
    </div>
  );
};
