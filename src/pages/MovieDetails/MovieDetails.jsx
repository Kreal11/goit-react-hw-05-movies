import React, { Suspense, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import { Dna } from 'react-loader-spinner';
import styled from 'styled-components';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');
  const [error, setError] = useState('');
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const getMovie = async () => {
      try {
        const movieInfo = await fetchMovieById(movieId);
        const { results } = await fetchVideoToMovieById(movieId);
        setMovie(movieInfo);
        setVideo(results);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);
  if (error) {
    navigate('/404');
  }

  if (isLoading) {
    return (
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
    );
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
              {movie.vote_average ? `${movie.vote_average}/10` : 'No rate yet'}
            </p>
            <p>
              Description:{' '}
              {movie.overview !== '' ? movie.overview : 'No description yet'}
            </p>
            <p>
              Genres:{' '}
              {movie.genres?.length
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

const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin: 0 auto;
  padding: 40px 0;
`;

export default MovieDetails;
