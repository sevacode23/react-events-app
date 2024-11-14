import { useCallback } from 'react';

import { IEventFormData } from 'components/event-form';

import { useEventContext } from '../../context';

export const useEditEventForm = () => {
  const { fetchedEvent } = useEventContext();

  const onSubmit = useCallback((form: IEventFormData) => {
    console.log(form);
  }, []);

  return { fetchedEvent, onSubmit };
};
