import React, { Suspense, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/movies-api';
import {
  StyledInputWrapper,
  StyledNavLink,
  StyledSearchMoviesUl,
} from './StyledMovies';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [value, setValue] = useState('');
  const location = useLocation();

  const [search, setSearch] = useSearchParams();
  const query = search.get('query') || '';

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSetSearch = () => {
    setSearch(value ? { query: value } : {});
  };

  useEffect(() => {
    const getFoundMovies = async () => {
      try {
        const data = await fetchMovieByQuery({ query });
        // console.log(data);
        setFoundMovies(data.results);
      } catch (error) {}
    };
    getFoundMovies();
  }, [query]);

  return (
    <Suspense>
      <StyledInputWrapper>
        <input value={value} onChange={handleChange} type="text" />
        <button type="button" onClick={handleSetSearch}>
          Search
        </button>
      </StyledInputWrapper>
      <StyledSearchMoviesUl>
        {query ? (
          foundMovies.length ? (
            foundMovies?.map(movie => (
              <li key={movie.id}>
                <StyledNavLink
                  to={movie.id.toString()}
                  state={{ from: location }}
                >
                  {movie.title ?? movie.name ?? movie.original_name}
                </StyledNavLink>
              </li>
            ))
          ) : (
            <h3>Sorry, there are no movies by your search</h3>
          )
        ) : (
          <h3>Start your search</h3>
        )}
      </StyledSearchMoviesUl>
    </Suspense>
  );
};

export default Movies;
