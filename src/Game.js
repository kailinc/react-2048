import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';

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
        <Score type="Current" score={this.state.curScore}/>
        <Score type="High" score={this.state.highScore}/>
        <Board/>
      </div>
    )
  }
}

export default Game;
