import { NavLink } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const StyledHomeUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  margin-top: 50px;
  font-size: 18px;
`;

export const StyledHomeHeader = styled.h2`
  color: white;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  transition: color 0.3s, box-shadow 0.3s, background-color 0.3s;
  border-radius: 5px;
  padding: 4px;

  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0 0 10px white;
  }
`;
