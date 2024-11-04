export interface IEventInfoProps {
  title: string;
  date: string;
  location: string;
  image: string;
}

export const EventInfo = (props: IEventInfoProps) => {
  const { title, date, location: description } = props;

  const dateObj = new Date(date);

  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const isoDate = dateObj.toISOString().split('T')[0];

  return (
    <div className="grid gap-y-2 text-center text-azureWhite">
      <p className="text-lg font-lato font-bold text-thistle">{title}</p>

      <time className="text-sm" dateTime={isoDate}>
        {formattedDate}
      </time>

      <p className="text-base">{description}</p>
    </div>
  );
};
