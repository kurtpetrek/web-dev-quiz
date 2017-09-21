import React from 'react';
import styled from 'styled-components';
import {styles} from '../constants.js';

const Heading = styled.h1`
  text-align: center;
  font-family: ${styles.headerFontFamily};
  font-size: 4rem;

  @media (max-width: 600px) {
    & {
      font-size: 3rem;
    }
  }
`;

export default function HomeScreen(props) {
  return (
    <div>
      <Heading>
        &lt;HTML&gt; &amp; &#123;CSS&#125; Quiz
      </Heading>
    </div>
  )
}
