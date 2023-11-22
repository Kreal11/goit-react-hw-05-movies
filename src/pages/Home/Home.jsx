import React, { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'services/movies-api';
import { StyledHomeHeader, StyledHomeUl } from './StyledHome';
import { TrendMovie } from 'components/TrendMovie/TrendMovie';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(prev => [...prev, ...results]);
      } catch (error) {}
    };
    getFilms();
  }, []);

  return (
    <div>
      <StyledHomeHeader>🔥Trending movies of this week🔥</StyledHomeHeader>
      {movies.length > 0 ? (
        <StyledHomeUl>
          {movies?.map(movie => (
            <TrendMovie movie={movie} />
          ))}
        </StyledHomeUl>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
