import { useState } from 'react';
import Search from './Search';
import UserCard from './UserCard';
import Spinner from './Spinner';
import { searchUsers } from '../services/githubService';

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (query) => {
    setLoading(true);
    setError(null);
    searchUsers(query)
      .then((usersData) => {
        setUsers(usersData);
      })
      .catch((err) => {
        setError('An error occurred while fetching users.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;