import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastToMovieById } from 'services/movies-api';
import { StyledCastH2, StyledCastLi, StyledCastUl } from './StyledCast';
import styled from 'styled-components';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchCastToMovieById(movieId);
        console.log(data);
        setCast(data.cast);
      } catch (error) {}
    };
    getCast();
  }, [movieId]);

  if (cast.length === 0) {
    return <StyledPlugH2>No cast information available</StyledPlugH2>;
  }

  return (
    <div>
      <StyledCastH2>Cast</StyledCastH2>
      <StyledCastUl>
        {cast.map(actor => (
          <StyledCastLi key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                width="150"
                height="200"
              />
            )}
            <p>
              {actor.name ? actor.name : 'No information about actor`s name'}
            </p>
            <p>
              Character:{' '}
              {actor.character
                ? actor.character
                : 'No information about actor`s character'}
            </p>
          </StyledCastLi>
        ))}
      </StyledCastUl>
    </div>
  );
};

const StyledPlugH2 = styled.h2`
  padding-bottom: 50px;
`;
