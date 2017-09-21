import React, { Component } from 'react';
import questions from './data';
import HomeScreen from './components/HomeScreen.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: questions,
      currentView: '',
      currentQuestions: []
    };
  }
  changeView(view){

  }
  render() {
    return (
      <HomeScreen />
    );
  }
}

export default App;
