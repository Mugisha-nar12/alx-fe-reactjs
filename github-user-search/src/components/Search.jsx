import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search users..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;