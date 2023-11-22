import { StyledNavLink } from 'components/Navbar/StyledNavbar';
import React from 'react';

export const TrendMovie = ({ movie }) => {
  return (
    <li key={movie.id}>
      <StyledNavLink to={`/movies/${movie.id}`}>
        {movie.title ?? movie.name ?? movie.original_name}
      </StyledNavLink>
    </li>
  );
};
