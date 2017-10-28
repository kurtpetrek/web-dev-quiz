import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.headerFontFamily};
  font-size: 4rem;
  color: ${props => props.theme.colorGrey};

  @media (max-width: 600px) {
    & {
      font-size: 3rem;
    }
  }
`;

const Heading = props => {
  return <StyledHeading>&lt;HTML&gt; &amp; &#123;CSS&#125; Quiz</StyledHeading>;
};

export default Heading;
