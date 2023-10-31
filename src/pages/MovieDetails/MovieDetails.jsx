import React from 'react';
import { useEffect, useState, useParams } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/movies-api.js';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async params => {
      try {
        const { results } = await fetchMovieById(movieId);
        console.log(results);
        setMovie(results);
      } catch (error) {}
    };
    getMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Оцінка: {movie.vote_average}</p>
      <p>Опис: {movie.overview}</p>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
