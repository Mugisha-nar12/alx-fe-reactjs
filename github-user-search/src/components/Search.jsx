// import { useState } from 'react';

// const Search = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleQueryChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="query"
//         type="text"
//         value={query}
//         onChange={handleQueryChange}
//         placeholder="Search users..."
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default Search;


import { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username) return;

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      let userResult;
      if (location) {
        userResult = await searchUsers({ query: username, location });
      } else {
        const singleUser = await fetchUserData(username);
        userResult = singleUser ? [singleUser] : [];
      }
      setUsers(userResult);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="username">
                GitHub Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter a GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="location">
                Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                placeholder="Enter a location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {loading && <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {users.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {users.map((user) => (
              <div key={user.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col justify-between">
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
                  <img className="w-24 h-24 rounded-full mb-4" src={user.avatar_url} alt={`${user.login}'s avatar`} />
                  <h2 className="text-xl font-bold dark:text-white">{user.name || user.login}</h2>
                  {user.location && <p className="text-gray-500 dark:text-gray-400">{user.location}</p>}
                  {user.bio && <p className="text-gray-600 dark:text-gray-300 my-2 text-sm">{user.bio}</p>}
                </a>
                <div className="flex justify-around w-full mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="text-center">
                        <p className="font-bold dark:text-white">{user.followers}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Followers</p>
                    </div>
                    <div className="text-center">
                        <p className="font-bold dark:text-white">{user.following}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Following</p>
                    </div>
                    <div className="text-center">
                        <p className="font-bold dark:text-white">{user.public_repos}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Repos</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;