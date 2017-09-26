import React, { Component } from 'react';
import styled from 'styled-components';

import Heading from './Heading';
import MainContainer from './MainContainer';
import Button from './Button';

class Quiz extends Component {
  constructor(props){
      super(props);
      this.handleNewQuiz = props.handleNewQuiz;
      this.state = {
        questions: props.questions,
        score: 0,
        maxScore: props.questions.length
      }
      console.log(this.state.questions);
  }

  render() {
    return (
      <div>
        <Heading/>
        <MainContainer>
          <Button handleClick={this.handleNewQuiz}>New Quiz</Button>
        </MainContainer>
      </div>
    );
  }
}

export default Quiz;
