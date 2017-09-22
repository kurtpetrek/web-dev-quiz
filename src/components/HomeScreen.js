import React from 'react';
import styled from 'styled-components';
import { styles } from '../constants.js';

import Button from './Button';
import RadioCheckBox from './RadioCheckBox';


const Heading = styled.h1`
  text-align: center;
  font-family: ${styles.headerFontFamily};
  font-size: 4rem;
  color: #444;

  @media (max-width: 600px) {
    & {
      font-size: 3rem;
    }
  }
`;

const QuestionSelectorContainer = styled.div`
  max-width: 700px;
  margin: 20px auto;
  border-radius: 3px;
  border-left: 2px solid #444;
  border-bottom: 2px solid #444;
  padding: 1rem;
  position: relative;
  box-shadow: 0px 0px 0px #444,
  -1px 1px 0px #444,
  -2px 2px 0px #444,
  -3px 3px 0px #444,
  -4px 4px 0px #444,
  -5px 5px 0px #444,
  -6px 6px 0px #444,
  -7px 7px 0px #444,
  -8px 8px 0px #444,
  -9px 9px 0px #444,
  -10px 10px 0px #444;

  @media (max-width: 750px) {
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
    background: linear-gradient(to right, #444, rgba(68,68,68,0));
  }

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    right: 0;
    top: 0;
    background: linear-gradient(to top, #444, rgba(68,68,68,0));
  }

  p {
    font-size: 1.3rem;
  }
`;

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.handleQuizStart = props.handleQuizStart;

    this.state = {
      maxQuestions: props.totalNumberOfQuestions,
      numberOfQuestions: props.totalNumberOfQuestions
    }
  }

  collectInput = (e) => {
    let val = parseInt(e.target.value, 10);
    this.setState((prevState)=> {
      prevState.numberOfQuestions = val;
      return prevState;
    })
  }

  onButtonClick = (e) => {
    this.handleQuizStart(this.state.numberOfQuestions);
  }

  render() {

    return (
      <div>
        <Heading>
          &lt;HTML&gt; &amp; &#123;CSS&#125; Quiz
        </Heading>

        <QuestionSelectorContainer>
          <p>Select number of questions: </p>
          <form>
            <RadioCheckBox
              value="10"
              checked={this.state.numberOfQuestions === 10}
              handleInput={this.collectInput}
              >
              10
            </RadioCheckBox>

            <RadioCheckBox
              value="20"
              checked={this.state.numberOfQuestions === 20}
              handleInput={this.collectInput}
              >
              20
            </RadioCheckBox>

            <RadioCheckBox
              value={this.state.maxQuestions}
              checked={this.state.numberOfQuestions === this.state.maxQuestions}
              handleInput={this.collectInput}
              >
              {this.state.maxQuestions}
            </RadioCheckBox>
          </form>
          <div style={{textAlign: 'right'}}>
            <Button
              handleClick={this.onButtonClick}
              >Start Quiz</Button>
          </div>
        </QuestionSelectorContainer>
      </div>
    )
  }
}
