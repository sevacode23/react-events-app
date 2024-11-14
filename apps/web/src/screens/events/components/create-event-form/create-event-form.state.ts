import { useMutation } from '@tanstack/react-query';
import { TCreateEvent } from '@events/shared';

import { IEventFormData } from 'components/event-form';
import { queryClient } from 'services/react-query';
import { serverAPI } from 'services/server-api';

export const useCreateEventForm = (onClose: () => void) => {
  const { mutate, isPending, error } = useMutation({
    mutationFn: (createEvent: TCreateEvent) =>
      serverAPI.createEvent(createEvent),

    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['events'] });
      onClose();
    },
  });

  const onSubmit = (form: IEventFormData) => {
    if (!form.image) {
      return;
    }

    mutate({
      title: form.title,
      description: form.description,
      image: form.image,
      date: form.date,
      location: form.location,
      time: form.time,
    });
  };

  return { isPending, error, onSubmit };
};
