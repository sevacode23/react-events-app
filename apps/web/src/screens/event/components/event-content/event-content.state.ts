import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { serverAPI } from 'services/server-api';

interface IRouteParams extends Record<string, string | undefined> {
  id: string;
}

export const useEventContent = () => {
  const { id } = useParams<IRouteParams>();

  if (!id) {
    throw new Error('Event id is missing');
  }

  const { data, error, isPending } = useQuery({
    queryKey: ['events', { id }],
    queryFn: () => serverAPI.getEvent(id),
  });

  return { data, error, isPending };
};
