import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { searchUsers } from '../services/githubService';
import { ReactComponent as LocationIcon } from '../assets/location.svg';
import { ReactComponent as RepoIcon } from '../assets/fork.svg';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    query: '',
    location: '',
  });

  const fetchUserData = async ({ pageParam = 1 }) => {
    const response = await searchUsers(searchParams, pageParam);
    return response;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['users', searchParams],
    queryFn: fetchUserData,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.items.length > 0) {
        return pages.length + 1;
      }
      return undefined;
    },
    enabled: !!searchParams.query,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParams.query) {
      // The query will automatically be re-fetched due to `enabled` option in useInfiniteQuery
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="query"
            value={searchParams.query}
            onChange={handleInputChange}
            placeholder="Search users..."
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
            placeholder="Location..."
            className="p-2 border rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </div>
      </form>

      {status === 'pending' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          {data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.items.map((user) => (
                <div key={user.id} className="p-4 mb-4 border rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <h2 className="text-xl font-bold">{user.login}</h2>
                      <div className="flex items-center text-gray-600">
                        <LocationIcon className="w-4 h-4 mr-1" />
                        <span>{user.location || 'Not specified'}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <RepoIcon className="w-4 h-4 mr-1" />
                        <span>{user.public_repos} Public Repos</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
          {data.pages[0].items.length === 0 && <p>Looks like we cant find the user</p>}
          <div>
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'}
            </button>
          </div>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
      )}
    </div>
  );
};

export default Search;