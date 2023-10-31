import React from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/movies-api.js';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieInfo = await fetchMovieById(movieId);
        console.log(movieInfo);
        setMovie(movieInfo);
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
      <img src={movie.backdrop_path} alt="" />
      <p>Rate: {movie.vote_average}/10</p>
      <p>Description: {movie.overview}</p>
      <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
