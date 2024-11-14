import { useState, useCallback } from 'react';

export const useEventsHeader = () => {
  const [isShowForm, setIsShowForm] = useState(false);

  const onCloseForm = useCallback(() => {
    setIsShowForm(false);
  }, []);

  const onOpenForm = useCallback(() => {
    setIsShowForm(true);
  }, []);

  return {
    isShowForm,
    onCloseForm,
    onOpenForm,
  };
};
