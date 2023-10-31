import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'f041ed3a64ad49a5d8fa59f2cf7de502';

export const fetchTrendingMovies = async params => {
  const { data } = await axios.get('trending/all/week', {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });
  return data;
};

//api.themoviedb.org/3/movie/{movie_id}

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};
