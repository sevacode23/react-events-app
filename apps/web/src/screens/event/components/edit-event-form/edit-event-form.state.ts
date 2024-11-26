import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';

import { IEventFormData } from 'components/event-form';
import { serverAPI } from 'services/server-api';
import { queryClient } from 'services/react-query';

import { useEventContext } from '../../context';
import { IEvent } from '@events/shared';

export const useEditEventForm = (onClose: () => void) => {
  const { fetchedEvent } = useEventContext();

  if (!fetchedEvent) {
    throw new Error('No event');
  }

  const queryKey = ['events', { id: fetchedEvent.id }];

  const { mutate, isPending, error } = useMutation({
    mutationFn: (form: IEventFormData) =>
      serverAPI.updateEvent(fetchedEvent.id, form),

    onMutate: async (form) => {
      await queryClient.cancelQueries({ queryKey });

      const prevEvent = queryClient.getQueryData(queryKey);

      const newEvent: IEvent = { id: fetchedEvent.id, ...form };
      queryClient.setQueryData(queryKey, newEvent);

      return { prevEvent };
    },

    onError: (_error, _data, context) => {
      queryClient.setQueryData(queryKey, context?.prevEvent);
    },

    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey });
    },
  });

  const onSubmit = useCallback(
    (form: IEventFormData) => {
      mutate(form);
      onClose();
    },
    [mutate, onClose]
  );

  return { fetchedEvent, isPending, error, onSubmit };
};
