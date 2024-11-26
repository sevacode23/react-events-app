import { useState, useCallback, useMemo } from 'react';

export interface IUseEventFormProps {
  onSubmit: (form: IEventFormData) => void;
  init?: IEventFormData;
}

export interface IEventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

const INIT_FORM_STATE: IEventFormData = {
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
  image: '',
};

export const useEventForm = (props: IUseEventFormProps) => {
  const { init, onSubmit } = props;

  const [form, setForm] = useState(init ?? INIT_FORM_STATE);

  const updateField = useCallback(
    (field: keyof IEventFormData, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const changeTextHandler = useCallback(
    (field: keyof IEventFormData) =>
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit(form);
  };

  return {
    ...form,
    onChangeTitle,
    onChangeDescription,
    onChangeDate,
    onChangeTime,
    onChangeLocation,
    onSelectImage,
    handleSubmit,
  };
};
