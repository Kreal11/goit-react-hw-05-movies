import React, { Suspense, useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'services/movies-api';
import { StyledHomeHeader, StyledHomeUl, StyledNavLink } from './StyledHome';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(prev => [...prev, ...results]);
        console.log(results);
      } catch (error) {}
    };
    getFilms();
  }, []);

  return (
    <Suspense>
      <StyledHomeHeader>🔥Trending movies of this week🔥</StyledHomeHeader>
      <StyledHomeUl>
        {movies?.map(movie => (
          <li key={movie.id}>
            <StyledNavLink to={`/movies/${movie.id}`}>
              {movie.title ?? movie.name ?? movie.original_name}
            </StyledNavLink>
          </li>
        ))}
      </StyledHomeUl>
    </Suspense>
  );
};

export default Home;
