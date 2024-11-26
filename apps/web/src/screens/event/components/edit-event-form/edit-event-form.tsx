import { EventForm } from 'components/event-form';

import { useEditEventForm } from './edit-event-form.state';

interface IProps {
  onClose: () => void;
}

export const EditEventForm = (props: IProps) => {
  const { onClose } = props;

  const { fetchedEvent, isPending, error, onSubmit } =
    useEditEventForm(onClose);

  return (
    <EventForm
      buttonLabel="Update"
      isPending={isPending}
      error={error}
      init={fetchedEvent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};
