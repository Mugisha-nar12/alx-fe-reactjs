import axios from 'axios';

const GITHUB_API_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;
const GITHUB_API_URL = 'https://api.github.com';

if (!GITHUB_API_TOKEN) {
  console.error('VITE_APP_GITHUB_API_KEY is not defined. Please add it to your .env file.');
}

const apiClient = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${GITHUB_API_TOKEN}`,
  },
});

const handleApiError = (error) => {
  const message = error.response?.data?.message || error.message || 'An unknown error occurred';
  console.error('GitHub API Error:', message);
  throw new Error(message);
};

export const searchUsers = async (searchParams, page = 1) => {
  const { query, location, repos } = searchParams;

  const queryParts = [];
  if (query) {
    const quotedQuery = query.includes(' ') ? `"${query}"` : query;
    queryParts.push(quotedQuery);
  }
  if (location) {
    const quotedLocation = location.includes(' ') ? `"${location}"` : location;
    queryParts.push(`location:${quotedLocation}`);
  }
  if (repos) {
    queryParts.push(`repos:>${repos}`);
  }

  if (queryParts.length === 0) {
    return { items: [], total_count: 0 };
  }

  const q = queryParts.join(' ');

  try {
    const response = await apiClient.get('/search/users', {
      params: { q, per_page: 20, page },
    });

    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await apiClient.get(`/users/${user.login}`);
        return userDetails.data;
      })
    );

    return { ...response.data, items: usersWithDetails };
  } catch (error) {
    handleApiError(error);
  }
};

export const fetchUserData = async (username) => {
  try {
    const [profile, repositories] = await Promise.all([
      apiClient.get(`/users/${username}`),
      apiClient.get(`/users/${username}/repos`, {
        params: { sort: 'updated', per_page: 10 },
      }),
    ]);
    return { profile: profile.data, repositories: repositories.data };
  } catch (error) {
    handleApiError(error);
  }
};