import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  font-size: 1.3rem;
  border-radius: ${props => props.theme.borderRadius};
  border-left: ${props => props.theme.thinBorder};
  border-bottom: ${props => props.theme.thinBorder};
  padding: 1rem;
  position: relative;
  box-shadow: ${props => props.theme.blockShadow};
  transition: ${props => props.theme.transitionTime};

  @media (max-width: 850px) {
    box-shadow: none;
    width: 98%;
  }

  &::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 0;
    left: 0;
    background: ${props => props.theme.bgGradient};
  }

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    right: 0;
    top: 0;
    background: ${props => props.theme.bgGradient};
  }
`;

const MainContainer = props => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default MainContainer;
