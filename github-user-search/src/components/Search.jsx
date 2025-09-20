import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { searchUsers } from '../services/githubService';
import UserCard from './UserCard';
import Spinner from './Spinner';
import SearchIcon from '../assets/search.svg?react';

function Search() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [perPage, setPerPage] = useState('');
  const [searchParams, setSearchParams] = useState({ query: '', location: '', perPage: '' });

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['searchUsers', searchParams],
    ({ pageParam = 1 }) => searchUsers(searchParams, pageParam),
    {
      enabled: !!searchParams.query || !!searchParams.location,
      retry: false,
      getNextPageParam: (lastPage, allPages) => {
        const perPageNum = parseInt(searchParams.perPage, 10) || 20;
        const maxPages = Math.ceil(lastPage.total_count / perPageNum);
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );

  const handlePerPageChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value) > 0 && !value.includes('.'))) {
      setPerPage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() || location.trim()) {
      setSearchParams({ query: query.trim(), location: location.trim(), perPage: perPage.trim() });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mb-8"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a GitHub username..."
            className="flex-grow px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <button
            type="submit"
            className="px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:bg-gray-400"
            disabled={!query.trim() && !location.trim()}
          >
            Search
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g., 'San Francisco')"
            className="flex-grow px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <input
            type="number"
            value={perPage}
            onChange={handlePerPageChange}
            placeholder="Results per page (e.g., 10)"
            min="1"
            className="flex-grow px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
        </div>
      </form>

      {isLoading && (
        <div className="flex items-center justify-center mt-8">
          <Spinner />
          <p className="text-gray-600">Loading...</p>
        </div>
      )}

      {isError && (
        <div className="mt-8 p-4 bg-red-100 text-red-700 border border-red-200 rounded-md">
          <p className="font-bold">Error:</p>
          <p>{error.message}</p>
        </div>
      )}

      {data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {data.pages.map((page) =>
              page.items.map((user) => <UserCard key={user.id} user={user} />)
            )}
          </div>
          {hasNextPage && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:bg-gray-400"
              >
                {isFetchingNextPage ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </>
      )}

      {data && data.pages[0].items.length === 0 && (
        <div className="text-center mt-16 text-gray-500">
          <p>Looks like we cant find the user</p>
        </div>
      )}

      {!searchParams.query && !searchParams.location && !isLoading && !isError && (
        <div className="text-center mt-16 text-gray-500">
          <SearchIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h2 className="text-xl">Search for a GitHub User</h2>
          <p>Start by typing a username or location in the search bar above.</p>
        </div>
      )}
    </div>
  );
}

export default Search;