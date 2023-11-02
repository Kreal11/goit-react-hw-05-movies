import styled from 'styled-components';

export const StyledCastUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  margin-top: 70px;
  font-size: 18px;
  max-width: 840px;
  padding-bottom: 30px;
`;

export const StyledCastLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCastH2 = styled.h2`
  display: flex;
  justify-content: center;
`;
