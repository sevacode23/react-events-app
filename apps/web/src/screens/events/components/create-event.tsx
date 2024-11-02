import { useState, useCallback } from 'react';

import { CreateEventForm } from './create-event-form/create-event-form';

interface IProps {
  label: string;
  className?: string;
}

export const CreateEvent = (props: IProps) => {
  const { label, className = 'btn-fill' } = props;

  const [isShowForm, setIsShowForm] = useState(false);

  const onClose = useCallback(() => {
    setIsShowForm(false);
  }, []);

  const onClick = () => {
    setIsShowForm(true);
  };

  const RenderForm = isShowForm ? <CreateEventForm onClose={onClose} /> : null;

  return (
    <>
      <button className={className} onClick={onClick}>
        {label}
      </button>

      {RenderForm}
    </>
  );
};
