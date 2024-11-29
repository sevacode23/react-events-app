import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { serverAPI } from 'services/server-api';

export const useSearchEvents = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState<string>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['events', { search: searchValue }],
    queryFn: ({ queryKey }) =>
      serverAPI.getEvents(queryKey[1].search as string),

    enabled: searchValue !== undefined,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSearch = () => {
    setSearchValue(inputValue);
  };

  return { data, isLoading, isError, inputValue, onChange, onSearch };
};
