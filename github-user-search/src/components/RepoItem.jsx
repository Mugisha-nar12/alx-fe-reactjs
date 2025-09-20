import StarIcon from '../assets/star.svg?react';
import ForkIcon from '../assets/fork.svg?react';
function RepoItem({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold text-blue-600 truncate">{repo.name}</h3>
      <p className="mt-2 text-gray-600">{repo.description}</p>
      <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4" />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center gap-1">
          <ForkIcon className="w-4 h-4" />
          <span>{repo.forks_count}</span>
        </div>
        {repo.language && (
          <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md">
            {repo.language}
          </span>
        )}
      </div>
    </a>
  );
}

export default RepoItem;