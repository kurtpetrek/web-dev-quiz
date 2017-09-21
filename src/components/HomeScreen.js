import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
  animation: heading-size 10s infinite alternate;

  @media (max-width: 900px) {
    & {
      text-align: left;
    }
  }

  @media (max-width: 600px) {
    & {
      text-align: right;
    }
  }

  @keyframes heading-size {
    0% { transform: scale(1)}
    100% { transform: scale(.5)}
  }
`;

export default function HomeScreen(props) {
  return (
    <div>
      <Heading>
        {'<HTML>'}
        <br />
        {'&'}
        <br/>
        {'{CSS}'}
        <br/>
        Quiz
      </Heading>
    </div>
  )
}
