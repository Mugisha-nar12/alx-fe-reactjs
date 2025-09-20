import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchUserData } from '../services/githubService';
import Spinner from './Spinner';
import RepoItem from './RepoItem';
import LinkIcon from '../assets/link.svg?react';
import LocationIcon from '../assets/location.svg?react';
import FollowersIcon from '../assets/followers.svg?react';

function UserProfile() {
  const { username } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ['userData', username],
    () => fetchUserData(username),
    {
      enabled: !!username,
      retry: false,
    }
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-16">
        <Spinner />
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-8 p-4 bg-red-100 text-red-700 border border-red-200 rounded-md">
        <p className="font-bold">Error:</p>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!data) return null;

  const { profile, repositories } = data;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <img
            src={profile.avatar_url}
            alt={`${profile.login}'s avatar`}
            className="w-40 h-40 rounded-full border-4 border-gray-200"
          />
          <div className="flex-grow text-center sm:text-left">
            <h1 className="text-4xl font-bold text-gray-900">{profile.name}</h1>
            <p className="text-2xl text-gray-500">@{profile.login}</p>
            <p className="mt-4 text-lg text-gray-700">{profile.bio}</p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-6 text-gray-600">
              {profile.location && (
                <div className="flex items-center gap-2">
                  <LocationIcon className="w-5 h-5" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.blog && (
                <a
                  href={profile.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <LinkIcon className="w-5 h-5" />
                  <span>{profile.blog}</span>
                </a>
              )}
            </div>

            <div className="flex justify-center sm:justify-start gap-6 mt-6">
              <div className="flex items-center gap-2 text-gray-800">
                <FollowersIcon className="w-5 h-5" />
                <span className="font-semibold">{profile.followers}</span>
                <span>followers</span>
              </div>
              <div className="text-gray-800">
                <span className="font-semibold">{profile.following}</span>
                <span> following</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Latest Repositories
        </h2>
        {repositories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repositories.map((repo) => (
              <RepoItem key={repo.id} repo={repo} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No repositories found.</p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;