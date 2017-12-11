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
                numSlackEmojis={this.state.board.numSlackEmojis}/>
        </div>

        <div className="heading">
          <p>Made by Kai using <a href="https://reactjs.org/">React</a> <a href="https://www.javascript.com/">JavaScript</a> , and <a href="https://www.w3schools.com/css">CSS</a>. I hope you enjoyed playing this game as much as I enjoyed developing it. This was my first React Project. I learned a ton about React, CSS Animations, and CSS styling. Object Oriented Programming and Data Structure Manipulation were two difficult pieces in this project.</p>

          <p>If you thought this was a cool project, please like it on <a href="https://github.com/kailinc/react-2048"> GitHub</a>. You can check out my code <a href="https://github.com/kailinc/react-2048">here</a>. Any suggestions about UI, UX, features and code
          are most welcome. Send me a PR.
          </p>


        </div>

      </div>
    )
  }
}


export default Game;
