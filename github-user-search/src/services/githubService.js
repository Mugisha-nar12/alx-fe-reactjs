
import axios from 'axios';

const API_URL = 'https://api.github.com';

const apiClient = axios.create({
  baseURL: API_URL,
});

const handleApiError = (error) => {
  console.error('API Error:', error.response || error.message);
  throw new Error('Failed to fetch data from GitHub API');
};

export const searchUsers = ({ query, location, minRepos }) => {
  let searchQuery = query;
  if (location) {
    searchQuery += `+location:${location}`;
  }
  if (minRepos) {
    searchQuery += `+repos:>${minRepos}`;
  }

  return axios
    .get(`https://api.github.com/search/users?q=${searchQuery}`)
    .then((response) => {
      const userPromises = response.data.items.map((user) =>
        fetchUserData(user.login)
      );
      return Promise.all(userPromises).then((userProfiles) => {
        return response.data.items.map((user, index) => ({
          ...user,
          ...userProfiles[index],
        }));
      });
    })
    .catch(handleApiError);
};

export const fetchUserData = (username) => {
  return apiClient
    .get(`/users/${username}`)
    .then((response) => response.data)
    .catch(handleApiError);
};