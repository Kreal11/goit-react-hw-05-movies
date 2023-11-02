import React, { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'services/movies-api';
import { StyledHomeHeader, StyledHomeUl, StyledNavLink } from './StyledHome';
import { Dna } from 'react-loader-spinner';

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
    <div>
      <StyledHomeHeader>🔥Trending movies of this week🔥</StyledHomeHeader>
      {movies.length > 0 ? (
        <StyledHomeUl>
          {movies?.map(movie => (
            <li key={movie.id}>
              <StyledNavLink to={`/movies/${movie.id}`}>
                {movie.title ?? movie.name ?? movie.original_name}
              </StyledNavLink>
            </li>
          ))}
        </StyledHomeUl>
      ) : (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
    </div>
  );
};

export default Home;
