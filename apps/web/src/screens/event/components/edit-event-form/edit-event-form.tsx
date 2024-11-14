import { EventForm } from 'components/event-form';

import { useEditEventForm } from './edit-event-form.state';

interface IProps {
  onClose: () => void;
}

export const EditEventForm = (props: IProps) => {
  const { onClose } = props;

  const { fetchedEvent, onSubmit } = useEditEventForm();

  return (
    <EventForm
      buttonLabel="Update"
      isPending={false}
      error={null}
      init={fetchedEvent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};
