import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';
import RestartBtn from './RestartBtn'
import './styles/index.css';

class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: new Board
    }

  }

  // method for handling arrow keys + all other keyboard actions
  handleKeyDown(event) {
    event.preventDefault();
    let key = event.keyCode
  }

  // react way of adding event listner (keydown) to window
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  // react way of removing event listner (keydown) to window cuz react will render things that change
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  restartGame() {
    this.setState({
      board: new Board
    })
  }
  render() {
    return(
      <div className="game">
        <div className="scores">
          <Score type="Current" score={this.state.curScore}/>
          <Score type="High" score={this.state.highScore}/></div>
        <div className="boardDiv">
          <Board />
        </div>
        <RestartBtn handleRestart={() => this.restartGame()} />
      </div>
    )
  }
}


export default Game;
