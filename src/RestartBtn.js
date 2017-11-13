import React, { Component } from 'react';
import './styles/index.css';

class RestartBtn extends Component {
  render() {
    return(
      <button className="restart-button" onClick={() => this.props.handleRestart()}>New Game</button>
    )
  }
}

export default RestartBtn
