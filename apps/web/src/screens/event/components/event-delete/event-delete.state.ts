import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { queryClient } from 'services/react-query';
import { serverAPI } from 'services/server-api';
import { ROUTES } from 'const';

export const useEventDelete = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { mutate, error, isPending } = useMutation({
    mutationFn: (eventId: string) => serverAPI.deleteEvent(eventId),

    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none',
      });

      navigate(ROUTES.EVENTS);
    },
  });

  const onClick = () => {
    if (!id) {
      return;
    }

    mutate(id);
  };

  return { error, isPending, onClick };
};
