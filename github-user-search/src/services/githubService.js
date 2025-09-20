
import axios from 'axios';

const API_URL = 'https://api.github.com';

const apiClient = axios.create({
  baseURL: API_URL,
});

const handleApiError = (error) => {
  if (error.response) {
    if (error.response.status === 404) {
      throw new Error('User not found');
    }
    if (error.response.status === 403) {
      throw new Error('API rate limit exceeded. Please wait and try again later.');
    }
    throw new Error(`GitHub API returned an error: ${error.response.status} ${error.response.statusText}`);
  } else if (error.request) {
    throw new Error('Could not connect to GitHub API. Please check your network connection.');
  } else {
    throw new Error(`An unexpected error occurred: ${error.message}`);
  }
};

export const searchUsers = async ({ query, location, minRepos }) => {
  let searchQuery = query;
  if (location) {
    searchQuery += `+location:${location}`;
  }
  if (minRepos) {
    searchQuery += `+repos:>${minRepos}`;
  }

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`);
    
    const userPromises = response.data.items.map(user => 
      fetchUserData(user.login).catch(e => {
        console.warn(`Could not fetch details for user ${user.login}:`, e.message);
        return null;
      })
    );

    const userProfiles = await Promise.all(userPromises);

    const combinedUsers = response.data.items.map((user, index) => {
      if (userProfiles[index]) {
        return { ...user, ...userProfiles[index] };
      }
      return null;
    }).filter(Boolean);

    return combinedUsers;

  } catch (error) {
    handleApiError(error);
  }
};

export const fetchUserData = (username) => {
  return apiClient
    .get(`/users/${username}`)
    .then((response) => response.data)
    .catch(handleApiError);
};