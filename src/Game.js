import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';
import RestartBtn from './RestartBtn'
import './styles/index.css';
import GameObj from './objects';

class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: new GameObj(),
      highScore: 0
    }
  }

  // method for handling arrow keys + all other keyboard actions
  handleKeyDown(event) {
    event.preventDefault();
    let key = event.keyCode
    let arrows = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    }
    this.setState({
      board: this.state.board.move(arrows[key])
    })
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
      board: new GameObj()
    })
  }

  render() {
    return(
      <div className="game">
        <div className="scores">
          <Score type="Current" score={this.state.board.score}/>
          <Score type="High" score={this.state.highScore}/></div>
        <div className="boardDiv">
          <Board blocks={this.state.board.blocks}/>
        </div>
        <RestartBtn handleRestart={() => this.restartGame()} />
      </div>
    )
  }
}


export default Game;
