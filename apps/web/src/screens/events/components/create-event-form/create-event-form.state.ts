import { useState, useCallback, useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { TCreateEvent } from '@events/shared';

import { serverAPI } from 'services/server-api';

interface IFormState {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

const INIT_FORM_STATE: IFormState = {
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
};

export const useCreateEventForm = () => {
  const [form, setForm] = useState(INIT_FORM_STATE);

  const { mutate, isPending, error } = useMutation({
    mutationFn: (createEvent: TCreateEvent) =>
      serverAPI.createEvent(createEvent),
  });

  const updateField = (field: keyof IFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const changeTextHandler = useCallback(
    (field: keyof IFormState) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        updateField(field, event.target.value);
      },
    []
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

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    mutate({
      title: form.title,
      description: form.description,
      image: form.description,
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
    onSubmit,
  };
};
