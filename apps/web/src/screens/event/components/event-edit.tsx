import { useCallback, useState } from 'react';

import { EditEventForm } from './edit-event-form';

export const EventEdit = () => {
  const [isShowForm, setIsShowForm] = useState(false);

  const onClick = useCallback(() => {
    setIsShowForm(true);
  }, []);

  const onClose = useCallback(() => {
    setIsShowForm(false);
  }, []);

  const RenderForm = isShowForm ? <EditEventForm onClose={onClose} /> : null;

  return (
    <>
      <button onClick={onClick}>Edit</button>

      {RenderForm}
    </>
  );
};
