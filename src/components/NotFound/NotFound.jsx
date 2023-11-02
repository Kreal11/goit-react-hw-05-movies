import React from 'react';
import { StyledNavLink, StyledPlugH2, Wrapper } from './StyledNotFound';

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

export default NotFound;
