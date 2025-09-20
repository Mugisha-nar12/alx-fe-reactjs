import { useState } from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [perPage, setPerPage] = useState('');

  const handlePerPageChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value) > 0 && !value.includes('.'))) {
      setPerPage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() || location.trim()) {
      onSearch({ query: query.trim(), location: location.trim(), perPage: perPage.trim() });
    }
  };

  return (
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
  );
}

export default Search;