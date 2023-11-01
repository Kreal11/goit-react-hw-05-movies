import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovieWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const StyledDescrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  text-align: justify;
  max-width: 800px;
  margin-bottom: 30px;
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  margin: auto;
  gap: 60px;
  justify-content: center;
  align-items: center;
`;

export const StyledInfoMovieWrapper = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const StyledMovieNavLink = styled(NavLink)`
  transition: color 0.3s, box-shadow 0.3s, background-color 0.3s;
  border-radius: 5px;
  padding: 4px;
  max-width: 70px;

  &.active {
    color: white;
  }
  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0 0 15px white;
  }
`;

export const StyledCastReviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  gap: 30px;
  margin-bottom: 30px;
`;
