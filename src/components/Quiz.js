import React, { Component } from 'react';
import styled from 'styled-components';

import Heading from './Heading';
import MainContainer from './MainContainer';
import Button from './Button';
import RadioCheckBox from './RadioCheckBox';

class Quiz extends Component {
  constructor(props){
      super(props);
      this.handleNewQuiz = props.handleNewQuiz;
      this.state = {
        questions: props.questions,
        score: 0,
        questionAnswered: false,
        selectedAnswer: '',
        answerCorrect: false,
        maxScore: props.questions.length
      }
      console.log(this.state.questions);
  }

  collectAnswerInput = (e) => {
      console.log(e.target.value);
      const answer = e.target.value;
      this.setState((prevState) => {
        prevState.selectedAnswer = answer;
        return prevState;
      });
  }

  onAnswerSubmit = () => {
    let answerCorrect = false;
    if (this.state.selectedAnswer === this.state.questions[0].answer) {
      answerCorrect = true;
    }
    this.setState((prevState) => {
      prevState.answerCorrect = answerCorrect;
      prevState.questionAnswered = true;
    });
  }

  render() {
    const createChoice = (choice) => {
      if (choice) {
        return (
          <RadioCheckBox
            key={choice}
            value={choice}
            checked={choice === this.state.selectedAnswer}
            handleInput={this.collectAnswerInput}
            disabled={this.state.questionAnswered}
            >
            {choice}
          </RadioCheckBox>
        )
      } else {
        return null
      }
    }
    const choices = [];
    choices.push(createChoice(this.state.questions[0].choice1));
    choices.push(createChoice(this.state.questions[0].choice2));
    choices.push(createChoice(this.state.questions[0].choice3));
    choices.push(createChoice(this.state.questions[0].choice4));
    let submitButton = <Button handleClick={this.onAnswerSubmit}>Submit Answer</Button>;
    let nextButton = '';
    if (this.state.questionAnswered) {
      submitButton = '';
      nextButton = <Button handleClick={this.handleNewQuiz}>Next Question</Button>;
    }
    let feedback = '';
    if (this.state.questionAnswered) {
      let feedbackHeading = 'Incorrect...';
      let feedbackStyles = {
        background: 'red',
        marginBottom: '1rem',
        padding: '1rem'
      }
      if (this.state.answerCorrect) {
        feedbackHeading = 'Correct!';
        feedbackStyles.background = 'lightblue';
      }
      feedback = <div style={feedbackStyles}>
                  <h3>{feedbackHeading}</h3>
                  <p>{this.state.questions[0].answerExplained}</p>
                </div>;
    }

    return (
      <div>
        <Heading/>
        <MainContainer>
          <p>{this.state.questions[0].question}</p>
          {feedback}
          <div style={{textAlign: 'center'}}>
            {nextButton}
          </div>
          {choices}
          {submitButton}
        </MainContainer>
        <Button handleClick={this.handleNewQuiz}>New Quiz</Button>
      </div>
    );
  }
}

export default Quiz;
