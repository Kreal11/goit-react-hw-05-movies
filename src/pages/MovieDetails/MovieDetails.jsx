import React from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchVideoToMovieById, fetchMovieById } from 'services/movies-api.js';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieInfo = await fetchMovieById(movieId);
        const { results } = await fetchVideoToMovieById(movieId);
        // console.log(movieInfo);
        // console.log(results);
        setVideo(results);
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
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
        width="350"
        height="500"
      />
      <p>Rate: {movie.vote_average}/10</p>
      <p>Description: {movie.overview}</p>
      <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
      <h3>Watch the trailer!</h3>
      <iframe
        title={video}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video[0].key}`}
      >
        {video.name}
      </iframe>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
