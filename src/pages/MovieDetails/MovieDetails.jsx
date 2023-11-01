import React, { Suspense, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchVideoToMovieById, fetchMovieById } from 'services/movies-api.js';
import {
  StyledCastReviewWrapper,
  StyledDescrWrapper,
  StyledInfoMovieWrapper,
  StyledMovieNavLink,
  StyledMovieWrapper,
  StyledTextWrapper,
  StyledTitleWrapper,
} from './StyledMovieDetails';

const MovieDetails = () => {
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
    <StyledMovieWrapper>
      <StyledDescrWrapper>
        <StyledTitleWrapper>
          <StyledMovieNavLink to={goBackRef.current}>
            Go back
          </StyledMovieNavLink>
          <h2>{movie.title !== '' ? movie.title : 'No title assigned yet'}</h2>
        </StyledTitleWrapper>
        <StyledTextWrapper>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
              width="250"
              height="350"
            />
          )}

          <StyledInfoMovieWrapper>
            <p>
              Rate:{' '}
              {movie.vote_average.length
                ? `${movie.vote_verage}/10`
                : 'No rate yet'}
            </p>
            <p>
              Description:{' '}
              {movie.overview !== '' ? movie.overview : 'No description yet'}
            </p>
            <p>
              Genres:{' '}
              {movie.genres.length
                ? movie.genres?.map(genre => genre.name).join(', ')
                : 'The movie has not yet been assigned any genre'}
            </p>
          </StyledInfoMovieWrapper>
        </StyledTextWrapper>
      </StyledDescrWrapper>
      {video && (
        <iframe
          title={video}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video[0]?.key}`}
        ></iframe>
      )}
      <StyledCastReviewWrapper>
        <StyledMovieNavLink to="cast">Cast</StyledMovieNavLink>
        <StyledMovieNavLink to="reviews">Reviews</StyledMovieNavLink>
      </StyledCastReviewWrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </StyledMovieWrapper>
  );
};

export default MovieDetails;
