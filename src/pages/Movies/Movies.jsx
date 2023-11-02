import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/movies-api';
import {
  StyledInputWrapper,
  StyledNavLink,
  StyledSearchMoviesUl,
} from './StyledMovies';
import styled from 'styled-components';
import { Dna } from 'react-loader-spinner';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [value, setValue] = useState('');
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const [search, setSearch] = useSearchParams();
  const query = search.get('query') || '';

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSetSearch = () => {
    setSearch(value ? { query: value } : {});
  };

  useEffect(() => {
    setIsLoading(true);
    const getFoundMovies = async () => {
      try {
        const data = await fetchMovieByQuery({ query });
        // console.log(data);
        setFoundMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getFoundMovies();
  }, [query]);

  return (
    <div>
      <StyledInputWrapper>
        <input value={value} onChange={handleChange} type="text" />
        <button type="button" onClick={handleSetSearch}>
          Search
        </button>
      </StyledInputWrapper>
      {isLoading ? (
        <StyledSpinnerWrapper>
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </StyledSpinnerWrapper>
      ) : (
        <StyledSearchMoviesUl $query={query} $foundMovies={foundMovies}>
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
              <StyledH3>Sorry, there are no movies by your search</StyledH3>
            )
          ) : (
            <StyledH3>Start your search☝️</StyledH3>
          )}
        </StyledSearchMoviesUl>
      )}
    </div>
  );
};

const StyledH3 = styled.h3`
  justify-content: center;
  margin: 0;
`;

const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin: 0 auto;
  padding: 40px 0;
`;

export default Movies;
