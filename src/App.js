import React, { Component } from 'react';
import questions from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: questions,
      currentView: ''
    };
    
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
