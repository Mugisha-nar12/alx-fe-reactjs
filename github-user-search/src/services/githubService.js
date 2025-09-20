
import axios from 'axios';

const API_URL = 'https://api.github.com';

const apiClient = axios.create({
  baseURL: API_URL,
});

const handleApiError = (error) => {
  console.error('API Error:', error.response || error.message);
  throw new Error('Failed to fetch data from GitHub API');
};

export const searchUsers = async ({ query, location, minRepos }) => {
  try {
    let searchQuery = query;
    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos) {
      searchQuery += `+repos:>${minRepos}`;
    }

    const response = await apiClient.get('/search/users', {
      params: {
        q: searchQuery,
      },
    });

    const users = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await fetchUserData(user.login);
        return {
          ...user,
          ...userDetails,
        };
      })
    );

    return users;
  } catch (error) {
    handleApiError(error);
  }
};

export const fetchUserData = async (username) => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};