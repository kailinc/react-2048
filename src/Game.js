import React, { Component } from 'react';
import Score from './Score';

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
        <p>This is Game Component</p>
        <Score type="Current" score={this.state.curScore}/>
        <Score type="High" score={this.state.highScore}/>
      </div>
    )
  }
}

export default Game;
