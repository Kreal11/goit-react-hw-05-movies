import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPlugH2 = styled.h2`
  margin-bottom: 50px;
`;

export const StyledNavLink = styled(NavLink)`
  transition: color 0.3s, box-shadow 0.3s, background-color 0.3s;
  border-radius: 5px;
  padding: 4px;
  max-width: 70px;

  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0 0 15px white;
  }
`;
