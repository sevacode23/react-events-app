import { useQuery } from '@tanstack/react-query';

import { serverAPI } from 'services/server-api';

export const useEventsList = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events'],

    queryFn: () => serverAPI.getEvents(),
  });

  return { data, isPending, isError, error };
};
