import React from 'react';
import { StyledSpinnerWrapper } from './StyledLoader';
import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <StyledSpinnerWrapper>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </StyledSpinnerWrapper>
  );
};
