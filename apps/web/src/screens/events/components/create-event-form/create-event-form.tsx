import { EventForm } from 'components/event-form';

import { useCreateEventForm } from './create-event-form.state';

interface IProps {
  onClose: () => void;
}

export const CreateEventForm = (props: IProps) => {
  const { onClose } = props;

  const { error, isPending, onSubmit } = useCreateEventForm(onClose);

  return (
    <EventForm
      buttonLabel="Create"
      isPending={isPending}
      error={error}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};
