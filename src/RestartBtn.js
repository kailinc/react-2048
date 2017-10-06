import React, { Component } from 'react';

class RestartBtn extends Component {
  render() {
    return(
      <button onClick={() => this.props.handleRestart()}>New Game</button>
    )
  }
}

export default RestartBtn
