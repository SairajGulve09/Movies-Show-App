const API_URL = 'https://api.tvmaze.com';

export const getShows = async () => {
  const response = await fetch(`${API_URL}/search/shows?q=all`);
  const data = await response.json();
  return data.map(item => item.show);
};

export const getShowById = async id => {
  const response = await fetch(`${API_URL}/shows/${id}`);
  const data = await response.json();
  return data;
};
