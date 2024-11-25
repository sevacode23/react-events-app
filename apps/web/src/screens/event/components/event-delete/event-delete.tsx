import { useEventDelete } from './event-delete.state';

export const EventDelete = () => {
  const { onClick, error, isPending } = useEventDelete();

  const label = error ? 'Error occurred' : isPending ? 'Deleting...' : 'Delete';

  return <button onClick={onClick}>{label}</button>;
};
