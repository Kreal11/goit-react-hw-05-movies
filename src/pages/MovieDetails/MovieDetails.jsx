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

  return (
    <div>
      MovieDetails
      <h1></h1>
      <h2></h2>
      <h3></h3>
      <p></p>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
