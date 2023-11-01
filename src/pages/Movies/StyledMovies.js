import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSearchMoviesUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  margin-top: 70px;
  font-size: 18px;
`;

export const StyledNavLink = styled(NavLink)`
  transition: color 0.3s, box-shadow 0.3s, background-color 0.3s;
  border-radius: 5px;
  padding: 4px;

  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0 0 15px white;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  button {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: color 0.3s, box-shadow 0.3s, background-color 0.3s;
    border-radius: 5px;
    border: 1px solid white;
    padding: 4px;
    max-width: 70px;

    &:hover {
      background-color: white;
      color: black;
      box-shadow: 0 0 15px white;
    }
  }

  input {
    padding: 4px;
    background-color: black;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
  }
`;
