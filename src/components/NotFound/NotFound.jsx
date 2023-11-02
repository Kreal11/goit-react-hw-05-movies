import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <StyledPlugH2>
            It seems like there is no data on this page😭
          </StyledPlugH2>
          <h2>
            You can go to <StyledNavLink to="/">Home</StyledNavLink>
          </h2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPlugH2 = styled.h2`
  margin-bottom: 50px;
`;

const StyledNavLink = styled(NavLink)`
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

export default NotFound;
