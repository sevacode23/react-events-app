import { IEvent } from '@events/shared';

import { getImageUrl } from 'utils';

export const EventInfo = (props: IEvent) => {
  const { description, date, time, location, image } = props;

  const imageUrl = getImageUrl(image);

  return (
    <div className="rounded-lg overflow-hidden bg-onyx grid gap-y-8">
      <img className="w-full h-[20rem]" src={imageUrl} />

      <div className="p-12 pt-0 grid gap-y-5">
        <div className="grid">
          <b className="text-lg">{location}</b>
          <time
            className="text-2xl font-normal text-azureWhite"
            dateTime={`${date}T${time}Z`}
          >
            {date}@{time}
          </time>
        </div>

        <p className="text-xl font-normal">{description}</p>
      </div>
    </div>
  );
};
