import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);

class App extends Component {
  state = {
    value1: value1,
    value2: value2,
    value3: value3,
    proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3,
    numQuestions: 0,
    numCorrect: 0
  }
  
  checkIfTrue = (selection) => {
	if((this.state.proposedAnswer === (this.state.value1 + this.state.value2 + this.state.value3) && selection) ||
      (this.state.proposedAnswer !== (this.state.value1 + this.state.value2 + this.state.value3) && !selection)) {
      this.setState((prevState) => ({
        numCorrect: prevState.numCorrect + 1
      }));
    }
    
    this.setState((prevState) => ({
        numQuestions: prevState.numQuestions + 1
      }));
    
    this.setNextQuestion();
  }
  
  setNextQuestion = () => {
    this.setState({
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100)
    });
    
    this.setState((prevState) => ({
      proposedAnswer: Math.floor(Math.random() * 3) + prevState.value1 + prevState.value2 + prevState.value3
    }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkIfTrue(true)}>True</button>
          <button onClick={() => this.checkIfTrue(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
