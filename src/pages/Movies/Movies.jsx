import React, { Suspense, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/movies-api';
import { Link } from 'react-router-dom';

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
      <input value={value} onChange={handleChange} type="text" />
      <button type="button" onClick={handleSetSearch}>
        Search
      </button>
      <ul>
        {query ? (
          foundMovies.length ? (
            foundMovies?.map(movie => (
              <li key={movie.id}>
                <Link to={movie.id.toString()} state={{ from: location }}>
                  {movie.title ?? movie.name ?? movie.original_name}
                </Link>
              </li>
            ))
          ) : (
            <h3>Sorry, there are no movies by your search</h3>
          )
        ) : (
          <h3>Start your search</h3>
        )}
      </ul>
    </Suspense>
  );
};

export default Movies;
