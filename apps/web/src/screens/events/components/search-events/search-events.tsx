import { EventsLoader } from '../events-loader';

import { SearchBar } from '../search-bar';

import { useSearchEvents } from './search-events.state';

export const SearchEvents = () => {
  const { data, isLoading, isError, inputValue, onChange, onSearch } =
    useSearchEvents();

  return (
    <div className="grid gap-y-6">
      <div className="grid gap-y-3 justify-center">
        <SearchBar value={inputValue} onChange={onChange} onSubmit={onSearch} />

        <p className="text-azureWhite">
          Please enter a search term and to find events.
        </p>
      </div>

      <EventsLoader isPending={isLoading} isError={isError} events={data} />
    </div>
  );
};
