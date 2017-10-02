import React, { Component } from 'react';

class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: [],
      curScore: 0,
      highScore: 1
    }
  }
  render() {
    return(
      <div>
        <p>This is board {this.state.board}</p>
        <p>This is curScore {this.state.curScore}</p>
        <p>This is highScore {this.state.highScore}</p>
      </div>
    )
  }
}

export default Game;
