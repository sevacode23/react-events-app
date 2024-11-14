import { useCallback, useState } from 'react';
import { IEvent } from '@events/shared';

import { EventForm } from 'components/event-form';

export const EventEdit = (props: IEvent) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const onClick = useCallback(() => {
    setIsShowForm(true);
  }, []);

  const onClose = useCallback(() => {
    setIsShowForm(false);
  }, []);

  const RenderForm = isShowForm ? (
    <EventForm init={{ ...props }} onClose={onClose} />
  ) : null;

  return (
    <>
      {RenderForm}

      <button onClick={onClick}>Edit</button>
    </>
  );
};
