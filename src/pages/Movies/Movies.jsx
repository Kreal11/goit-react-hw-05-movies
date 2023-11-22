import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/movies-api';
import { StyledInputWrapper, StyledSearchMoviesUl } from './StyledMovies';
import styled from 'styled-components';
import { SearchMovie } from 'components/SearchedMovie/SearchedMovie';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [value, setValue] = useState('');
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

      {isLoading ? <Loader /> : null}

      {foundMovies.length ? (
        <StyledSearchMoviesUl>
          {foundMovies?.map(movie => (
            <SearchMovie movie={movie} />
          ))}
        </StyledSearchMoviesUl>
      ) : null}

      {!foundMovies.length && query && (
        <StyledH3>No data for you query😭</StyledH3>
      )}

      {!query && <StyledH3>Start your search☝️</StyledH3>}
    </div>
  );
};

const StyledH3 = styled.h3`
  margin-top: 40px;
  text-align: center;
`;

export default Movies;
