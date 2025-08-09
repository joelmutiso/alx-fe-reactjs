import axios from "axios";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query.trim() },
      headers: apiKey ? { Authorization: `token ${apiKey}` } : {},
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching advanced GitHub user search:", error);
    throw error;
  }
};

