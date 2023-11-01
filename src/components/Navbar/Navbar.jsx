import React from 'react';
import { StyledNav, StyledNavLink } from './StyledNavbar';

export const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledNav>
  );
};
