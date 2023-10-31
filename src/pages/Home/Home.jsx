import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingFilms } from 'services/movies-api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getFilms = async params => {
      try {
        const { results } = await fetchTrendingFilms();
        setMovies(prev => [...prev, ...results]);
        console.log(results);
      } catch (error) {}
    };
    getFilms();
  }, []);

  return (
    <div>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link>{movie.title ?? movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
