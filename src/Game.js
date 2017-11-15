import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';
import RestartBtn from './RestartBtn'
import './styles/index.css';
import GameObj from './objects';
import GameEnding from './GameEnding';

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
    this.handleScore()
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

  handleScore() {
    if (this.state.board.score >= this.state.highScore) {
      this.setState({
        highScore: this.state.board.score
      })
    }
  }

  render() {
    return(
      <div className="game">

        <div className="heading">
          <h1 className="title">2048</h1>
          <div className="scores-container">
            <Score type="score" score={this.state.board.score} scoresToAdd={this.state.board.scoreToAdd}/>
            <Score type="best" score={this.state.highScore}/>
          </div>
        </div>

        <div className="above-game">
          <p className="game-intro">Join the numbers and get to the <strong>2048 tile!</strong></p>
        </div>


        <div className="boardDiv">
          <Board board={this.state.board}
                onRestart={ () => this.restartGame() }
                blocks={this.state.board.blocks}
                numParrots={this.state.board.numParrots}/>
        </div>

        <RestartBtn handleRestart={() => this.restartGame()} />

        <div>
          Made by Kai using React
        </div>

        <div>
          Techniques to consider.
        </div>

      </div>
    )
  }
}


export default Game;
