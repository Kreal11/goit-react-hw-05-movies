import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/all';

const API_KEY = 'f041ed3a64ad49a5d8fa59f2cf7de502';

export const fetchTrendingFilms = async params => {
  const { data } = await axios.get('/week', {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });
  return data;
};
