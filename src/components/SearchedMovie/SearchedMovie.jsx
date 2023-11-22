import { StyledNavLink } from 'components/Navbar/StyledNavbar';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const SearchMovie = ({ movie }) => {
  const location = useLocation();

  return (
    <li key={movie.id}>
      <StyledNavLink to={movie.id.toString()} state={{ from: location }}>
        {movie.title ?? movie.name ?? movie.original_name}
      </StyledNavLink>
    </li>
  );
};
