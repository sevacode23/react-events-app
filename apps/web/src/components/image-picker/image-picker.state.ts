import { useQuery } from '@tanstack/react-query';

import { serverAPI } from 'services/server-api';

export const useImagePicker = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['event-images'],
    queryFn: () => serverAPI.getEventImages(),
  });

  return { data, isPending, error };
};
