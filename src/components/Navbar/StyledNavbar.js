import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  font-size: 22px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  transition: color 0.3s, box-shadow 0.3s, background-color 0.3s;
  border-radius: 5px;
  padding: 4px;

  &.active {
    color: white;
  }
  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0 0 10px white;
  }
`;
