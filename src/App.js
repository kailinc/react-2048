import React, { Component } from 'react';
import logo from './styles/logo.svg';
import Game from './Game';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-2048</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
