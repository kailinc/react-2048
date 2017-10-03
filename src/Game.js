import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';

class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: [0,0,2,0,4,8,16,0,2,2,2,0,2,2,0,2],
      curScore: 0,
      highScore: 1
    }
  }
  render() {
    return(
      <div>
        <Score type="Current" score={this.state.curScore}/>
        <Score type="High" score={this.state.highScore}/>
        <Board board={this.state.board}/>
      </div>
    )
  }
}

export default Game;
