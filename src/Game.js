import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';
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

        <p>Join the numbers and get to the <strong>2048 tile!</strong></p>

        <div className="boardDiv">
          <Board board={this.state.board}
                onRestart={ () => this.restartGame() }
                blocks={this.state.board.blocks}
                numParrots={this.state.board.numParrots}/>
        </div>

        <div className="heading">
          <p>Made by Kai using React and CSS. You can check out my code here at (GitHub). I hope you enjoyed playing this game as much as I enjoyed developing it. This was my first project using React. I learned a ton lot about how to use the basics of React. I learned a tremedous amount about CSS Animations and CSS Styling.
          This was also a great practice for Object Orientated Programming and manupulated Data Structures.

          Now I am looking for a challenge.</p>

          <p>Techniques to consider: The Snake Approach.</p>
        </div>

      </div>
    )
  }
}


export default Game;
