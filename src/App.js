import React, { Component } from 'react';
import questions from './data';
import HomeScreen from './components/HomeScreen.js'
import Quiz from './components/Quiz.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: questions,
      currentView: 'HomeScreen',
      currentQuestions: []
    };
  }

  onQuizStart = (numberOfQuestions) => {
    console.log(numberOfQuestions);
    this.setState((prevState) => {
      prevState.currentView = 'Quiz';
      return prevState;
    });
  }

  render() {
    if (this.state.currentView === 'HomeScreen') {
      return (
        <HomeScreen
          totalNumberOfQuestions={this.state.data.length}
          handleQuizStart={this.onQuizStart}
        />
      );
    }
    if (this.state.currentView === 'Quiz') {
      return (
        <Quiz/>
      );
    }
  }
}

export default App;
