import { Link } from 'react-router-dom';
import LocationIcon from '../assets/location.svg?react';
import RepoIcon from '../assets/fork.svg?react';

function UserCard({ user }) {
  return (
    <Link
      to={`/user/${user.login}`}
      className="block p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-16 h-16 rounded-full border-2 border-gray-200"
        />
        <div className="overflow-hidden">
          <p className="text-xl font-bold text-gray-800 truncate">
            {user.login}
          </p>
          <p className="text-sm text-gray-500">View Profile &rarr;</p>
        </div>
      </div>
      <div className="text-sm text-gray-600 space-y-2">
        {user.location && (
          <div className="flex items-center gap-2">
            <LocationIcon className="w-4 h-4 opacity-75" />
            <span>{user.location}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <RepoIcon className="w-4 h-4 opacity-75" />
          <span>{user.public_repos} Repositories</span>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;