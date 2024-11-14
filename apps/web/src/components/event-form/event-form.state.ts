import { useState, useCallback, useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { TCreateEvent } from '@events/shared';

import { serverAPI } from 'services/server-api';
import { queryClient } from 'services/react-query';

export interface IUseEventFormProps {
  onClose: () => void;
  init?: TCreateEvent;
}

interface IFormState {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
}

const INIT_FORM_STATE: IFormState = {
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
};

export const useEventForm = (props: IUseEventFormProps) => {
  const { init, onClose } = props;

  const [form, setForm] = useState(init ?? INIT_FORM_STATE);

  const { mutate, isPending, error } = useMutation({
    mutationFn: (createEvent: TCreateEvent) =>
      serverAPI.createEvent(createEvent),

    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['events'] });
      onClose();
    },
  });

  const updateField = useCallback((field: keyof IFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const changeTextHandler = useCallback(
    (field: keyof IFormState) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        updateField(field, event.target.value);
      },
    [updateField]
  );

  const onChangeTitle = useMemo(
    () => changeTextHandler('title'),
    [changeTextHandler]
  );

  const onChangeDescription = useMemo(
    () => changeTextHandler('description'),
    [changeTextHandler]
  );

  const onChangeLocation = useMemo(
    () => changeTextHandler('location'),
    [changeTextHandler]
  );

  const onChangeDate = useMemo(
    () => changeTextHandler('date'),
    [changeTextHandler]
  );

  const onChangeTime = useMemo(
    () => changeTextHandler('time'),
    [changeTextHandler]
  );

  const onSelectImage = useCallback(
    (image: string) => {
      updateField('image', image);
    },
    [updateField]
  );

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

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

  return {
    ...form,
    isPending,
    error,
    onChangeTitle,
    onChangeDescription,
    onChangeDate,
    onChangeTime,
    onChangeLocation,
    onSelectImage,
    onSubmit,
  };
};
