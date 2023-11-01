import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchVideoToMovieById, fetchMovieById } from 'services/movies-api.js';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieInfo = await fetchMovieById(movieId);
        const { results } = await fetchVideoToMovieById(movieId);

        console.log(movieInfo);
        // console.log(results);
        setMovie(movieInfo);
        setVideo(results);
      } catch (error) {}
    };
    getMovie();
  }, [movieId]);

  if (Object.keys(movie).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={goBackRef.current}>Go back</Link>
      <h2>{movie.title}</h2>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
          width="350"
          height="500"
        />
      )}
      <p>Rate: {movie.vote_average}/10</p>
      <p>Description: {movie.overview}</p>
      <p>Genres: {movie.genres?.map(genre => genre.name).join(', ')}</p>
      {video && (
        <iframe
          title={video}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video[0]?.key}`}
        ></iframe>
      )}
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
