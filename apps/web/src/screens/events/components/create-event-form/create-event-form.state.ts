import { useState, useCallback, useMemo } from 'react';

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
  };

  return {
    ...form,
    onChangeTitle,
    onChangeDescription,
    onChangeDate,
    onChangeTime,
    onChangeLocation,
    onSubmit,
  };
};
