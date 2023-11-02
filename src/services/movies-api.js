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

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchVideoToMovieById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/videos`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchCastToMovieById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchReviewsToMovieById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieByQuery = async params => {
  const { data } = await axios.get('search/movie', {
    params: {
      api_key: API_KEY,
      ...params,
    },
  });
  return data;
};
